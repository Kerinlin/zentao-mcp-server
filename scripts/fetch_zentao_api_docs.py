#!/usr/bin/env python3
"""Fetch ZenTao RESTful API v1.0 handbook pages and write module markdown docs."""

from __future__ import annotations

import html as html_lib
import re
import time
import urllib.error
import urllib.request
from collections import defaultdict
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs" / "api-v1"
CACHE_DIR = Path("/tmp/zentao-api-docs/raw")
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# (module_id, module_name, api_id, section_no, title, url)
ENDPOINTS: list[tuple[str, str, str, str, str, str]] = [
    # 2.1
    ("2.1", "配置使用与常见问题", "1397", "2.1", "配置使用与常见问题", "https://www.zentao.net/book/api/1397.html"),
    # 2.2
    ("2.2", "Token", "664", "2.2", "获取 Token", "https://www.zentao.net/book/api/664.html"),
    # 2.3 部门
    ("2.3", "部门", "964", "2.3.1", "获取部门列表", "https://www.zentao.net/book/api/964.html"),
    ("2.3", "部门", "965", "2.3.2", "获取部门详情", "https://www.zentao.net/book/api/965.html"),
    # 2.4 用户
    ("2.4", "用户", "665", "2.4.1", "获取我的个人信息", "https://www.zentao.net/book/api/665.html"),
    ("2.4", "用户", "666", "2.4.2", "获取用户列表", "https://www.zentao.net/book/api/666.html"),
    ("2.4", "用户", "667", "2.4.3", "获取用户信息", "https://www.zentao.net/book/api/667.html"),
    ("2.4", "用户", "668", "2.4.4", "修改用户信息", "https://www.zentao.net/book/api/668.html"),
    ("2.4", "用户", "669", "2.4.5", "删除用户", "https://www.zentao.net/book/api/669.html"),
    ("2.4", "用户", "838", "2.4.6", "创建用户", "https://www.zentao.net/book/api/838.html"),
    # 2.5 项目集
    ("2.5", "项目集", "670", "2.5.1", "获取项目集列表", "https://www.zentao.net/book/api/670.html"),
    ("2.5", "项目集", "671", "2.5.2", "修改项目集", "https://www.zentao.net/book/api/671.html"),
    ("2.5", "项目集", "672", "2.5.3", "获取项目集详情", "https://www.zentao.net/book/api/672.html"),
    ("2.5", "项目集", "673", "2.5.4", "删除项目集", "https://www.zentao.net/book/api/673.html"),
    ("2.5", "项目集", "674", "2.5.5", "创建项目集", "https://www.zentao.net/book/api/674.html"),
    # 2.6 产品
    ("2.6", "产品", "675", "2.6.1", "获取产品列表", "https://www.zentao.net/book/api/675.html"),
    ("2.6", "产品", "676", "2.6.2", "创建产品", "https://www.zentao.net/book/api/676.html"),
    ("2.6", "产品", "677", "2.6.3", "获取产品详情", "https://www.zentao.net/book/api/677.html"),
    ("2.6", "产品", "678", "2.6.4", "编辑产品", "https://www.zentao.net/book/api/678.html"),
    ("2.6", "产品", "679", "2.6.5", "删除产品", "https://www.zentao.net/book/api/679.html"),
    # 2.7 产品计划
    ("2.7", "产品计划", "680", "2.7.1", "获取产品计划列表", "https://www.zentao.net/book/api/680.html"),
    ("2.7", "产品计划", "681", "2.7.2", "创建计划", "https://www.zentao.net/book/api/681.html"),
    ("2.7", "产品计划", "682", "2.7.3", "获取计划详情", "https://www.zentao.net/book/api/682.html"),
    ("2.7", "产品计划", "683", "2.7.4", "修改计划", "https://www.zentao.net/book/api/683.html"),
    ("2.7", "产品计划", "684", "2.7.5", "删除计划", "https://www.zentao.net/book/api/684.html"),
    ("2.7", "产品计划", "685", "2.7.6", "产品计划关联需求", "https://www.zentao.net/book/api/685.html"),
    ("2.7", "产品计划", "686", "2.7.7", "产品计划取消关联需求", "https://www.zentao.net/book/api/686.html"),
    ("2.7", "产品计划", "687", "2.7.8", "产品计划关联 Bug", "https://www.zentao.net/book/api/687.html"),
    ("2.7", "产品计划", "688", "2.7.9", "产品计划取消关联 Bug", "https://www.zentao.net/book/api/688.html"),
    # 2.8 发布
    ("2.8", "发布", "689", "2.8.1", "获取产品发布列表", "https://www.zentao.net/book/api/689.html"),
    ("2.8", "发布", "690", "2.8.2", "获取项目发布列表", "https://www.zentao.net/book/api/690.html"),
    # 2.9 需求
    ("2.9", "需求", "691", "2.9.1", "获取产品需求列表", "https://www.zentao.net/book/api/691.html"),
    ("2.9", "需求", "692", "2.9.2", "获取项目需求列表", "https://www.zentao.net/book/api/692.html"),
    ("2.9", "需求", "693", "2.9.3", "获取执行需求列表", "https://www.zentao.net/book/api/693.html"),
    ("2.9", "需求", "694", "2.9.4", "创建需求", "https://www.zentao.net/book/api/694.html"),
    ("2.9", "需求", "695", "2.9.5", "获取需求详情", "https://www.zentao.net/book/api/695.html"),
    ("2.9", "需求", "696", "2.9.6", "变更需求", "https://www.zentao.net/book/api/696.html"),
    ("2.9", "需求", "697", "2.9.7", "修改需求其他字段", "https://www.zentao.net/book/api/697.html"),
    ("2.9", "需求", "698", "2.9.8", "删除需求", "https://www.zentao.net/book/api/698.html"),
    ("2.9", "需求", "1060", "2.9.9", "关闭需求", "https://www.zentao.net/book/api/1060.html"),
    # 2.10 项目
    ("2.10", "项目", "699", "2.10.1", "获取项目列表", "https://www.zentao.net/book/api/699.html"),
    ("2.10", "项目", "700", "2.10.2", "创建项目", "https://www.zentao.net/book/api/700.html"),
    ("2.10", "项目", "701", "2.10.3", "获取项目详情", "https://www.zentao.net/book/api/701.html"),
    ("2.10", "项目", "702", "2.10.4", "修改项目", "https://www.zentao.net/book/api/702.html"),
    ("2.10", "项目", "703", "2.10.5", "删除项目", "https://www.zentao.net/book/api/703.html"),
    # 2.11 版本
    ("2.11", "版本", "704", "2.11.1", "获取项目版本列表", "https://www.zentao.net/book/api/704.html"),
    ("2.11", "版本", "705", "2.11.2", "获取执行版本列表", "https://www.zentao.net/book/api/705.html"),
    ("2.11", "版本", "706", "2.11.3", "创建版本", "https://www.zentao.net/book/api/706.html"),
    ("2.11", "版本", "707", "2.11.4", "获取版本详情", "https://www.zentao.net/book/api/707.html"),
    ("2.11", "版本", "708", "2.11.5", "修改版本", "https://www.zentao.net/book/api/708.html"),
    ("2.11", "版本", "709", "2.11.6", "删除版本", "https://www.zentao.net/book/api/709.html"),
    # 2.12 执行
    ("2.12", "执行", "710", "2.12.1", "获取项目的执行列表", "https://www.zentao.net/book/api/710.html"),
    ("2.12", "执行", "711", "2.12.2", "创建执行", "https://www.zentao.net/book/api/711.html"),
    ("2.12", "执行", "712", "2.12.3", "查看执行详情", "https://www.zentao.net/book/api/712.html"),
    ("2.12", "执行", "713", "2.12.4", "修改执行", "https://www.zentao.net/book/api/713.html"),
    ("2.12", "执行", "714", "2.12.5", "删除执行", "https://www.zentao.net/book/api/714.html"),
    # 2.13 任务
    ("2.13", "任务", "715", "2.13.1", "获取执行任务列表", "https://www.zentao.net/book/api/715.html"),
    ("2.13", "任务", "716", "2.13.2", "创建任务", "https://www.zentao.net/book/api/716.html"),
    ("2.13", "任务", "717", "2.13.3", "获取任务详情", "https://www.zentao.net/book/api/717.html"),
    ("2.13", "任务", "718", "2.13.4", "修改任务", "https://www.zentao.net/book/api/718.html"),
    ("2.13", "任务", "719", "2.13.5", "删除任务", "https://www.zentao.net/book/api/719.html"),
    ("2.13", "任务", "967", "2.13.6", "开始任务", "https://www.zentao.net/book/api/967.html"),
    ("2.13", "任务", "968", "2.13.7", "暂停任务", "https://www.zentao.net/book/api/968.html"),
    ("2.13", "任务", "969", "2.13.8", "继续任务", "https://www.zentao.net/book/api/969.html"),
    ("2.13", "任务", "970", "2.13.9", "完成任务", "https://www.zentao.net/book/api/970.html"),
    ("2.13", "任务", "1200", "2.13.10", "关闭任务", "https://www.zentao.net/book/api/1200.html"),
    ("2.13", "任务", "1198", "2.13.11", "添加任务日志", "https://www.zentao.net/book/api/1198.html"),
    ("2.13", "任务", "1199", "2.13.12", "获取任务日志", "https://www.zentao.net/book/api/1199.html"),
    # 2.14 Bug
    ("2.14", "Bug", "720", "2.14.1", "获取产品 Bug 列表", "https://www.zentao.net/book/api/720.html"),
    ("2.14", "Bug", "721", "2.14.2", "创建 Bug", "https://www.zentao.net/book/api/721.html"),
    ("2.14", "Bug", "722", "2.14.3", "获取 Bug 详情", "https://www.zentao.net/book/api/722.html"),
    ("2.14", "Bug", "723", "2.14.4", "修改 Bug", "https://www.zentao.net/book/api/723.html"),
    ("2.14", "Bug", "724", "2.14.5", "删除 Bug", "https://www.zentao.net/book/api/724.html"),
    ("2.14", "Bug", "1120", "2.14.6", "确认 Bug", "https://www.zentao.net/book/api/1120.html"),
    ("2.14", "Bug", "1121", "2.14.7", "关闭 Bug", "https://www.zentao.net/book/api/1121.html"),
    ("2.14", "Bug", "1142", "2.14.8", "激活 Bug", "https://www.zentao.net/book/api/1142.html"),
    ("2.14", "Bug", "1181", "2.14.9", "解决 Bug", "https://www.zentao.net/book/api/1181.html"),
    # 2.15 用例
    ("2.15", "用例", "725", "2.15.1", "获取产品用例列表", "https://www.zentao.net/book/api/725.html"),
    ("2.15", "用例", "726", "2.15.2", "创建用例", "https://www.zentao.net/book/api/726.html"),
    ("2.15", "用例", "727", "2.15.3", "获取用例详情", "https://www.zentao.net/book/api/727.html"),
    ("2.15", "用例", "728", "2.15.4", "修改用例", "https://www.zentao.net/book/api/728.html"),
    ("2.15", "用例", "729", "2.15.5", "删除用例", "https://www.zentao.net/book/api/729.html"),
    ("2.15", "用例", "962", "2.15.6", "执行用例", "https://www.zentao.net/book/api/962.html"),
    # 2.16 测试单
    ("2.16", "测试单", "730", "2.16.1", "获取测试单列表", "https://www.zentao.net/book/api/730.html"),
    ("2.16", "测试单", "731", "2.16.2", "获取项目的测试单", "https://www.zentao.net/book/api/731.html"),
    ("2.16", "测试单", "732", "2.16.3", "获取测试单详情", "https://www.zentao.net/book/api/732.html"),
    # 2.17 反馈
    ("2.17", "反馈", "840", "2.17.1", "创建反馈", "https://www.zentao.net/book/api/840.html"),
    ("2.17", "反馈", "841", "2.17.2", "指派反馈", "https://www.zentao.net/book/api/841.html"),
    ("2.17", "反馈", "842", "2.17.3", "关闭反馈", "https://www.zentao.net/book/api/842.html"),
    ("2.17", "反馈", "843", "2.17.4", "删除反馈", "https://www.zentao.net/book/api/843.html"),
    ("2.17", "反馈", "844", "2.17.5", "修改反馈", "https://www.zentao.net/book/api/844.html"),
    ("2.17", "反馈", "845", "2.17.6", "获取反馈详情", "https://www.zentao.net/book/api/845.html"),
    ("2.17", "反馈", "846", "2.17.7", "获取反馈列表", "https://www.zentao.net/book/api/846.html"),
    # 2.18 工单
    ("2.18", "工单", "1266", "2.18.1", "获取工单列表", "https://www.zentao.net/book/api/1266.html"),
    ("2.18", "工单", "1267", "2.18.2", "获取工单详情", "https://www.zentao.net/book/api/1267.html"),
    ("2.18", "工单", "1268", "2.18.3", "修改工单", "https://www.zentao.net/book/api/1268.html"),
    ("2.18", "工单", "1269", "2.18.4", "创建工单", "https://www.zentao.net/book/api/1269.html"),
    ("2.18", "工单", "1270", "2.18.5", "删除工单", "https://www.zentao.net/book/api/1270.html"),
]


def clean_text(s: str) -> str:
    s = html_lib.unescape(s)
    s = s.replace("\xa0", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def fetch(url: str, api_id: str, force: bool = False) -> str:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    cache = CACHE_DIR / f"{api_id}.html"
    if cache.exists() and not force and cache.stat().st_size > 1000:
        return cache.read_text(encoding="utf-8", errors="ignore")

    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html"})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read().decode("utf-8", errors="ignore")
            cache.write_text(data, encoding="utf-8")
            return data
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt == 2:
                raise
            time.sleep(1.5 * (attempt + 1))
            print(f"  retry {attempt + 1} for {url}: {e}")
    raise RuntimeError(f"failed to fetch {url}")


SECTION_ORDER = [
    "请求URL",
    "请求头",
    "请求参数",
    "请求体",
    "请求示例",
    "请求响应",
    "响应示例",
]

FOOTER_HEADINGS = {
    "禅道产品",
    "核心功能",
    "使用文档",
    "帮助中心",
    "关于我们",
    "禅道社区",
    "联系方式",
}


@dataclass
class ApiDoc:
    module_id: str
    module_name: str
    api_id: str
    section_no: str
    title: str
    url: str
    method: str = ""
    path: str = ""
    page_title: str = ""
    sections: dict[str, list[tuple[str, str]]] = field(default_factory=dict)
    raw_ok: bool = True
    error: str = ""
    is_guide: bool = False


def strip_tags(s: str) -> str:
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    return html_lib.unescape(s)


def extract_content_region(html: str) -> str:
    """Cut main API article body, drop site chrome."""
    m = re.search(
        r"<div class=content>(.*?)(?:</div>\s*</section>|<footer\b|<div id=commentBox)",
        html,
        re.S | re.I,
    )
    if m:
        region = m.group(1)
    else:
        m = re.search(r"<div class=content>(.*)", html, re.S | re.I)
        region = m.group(1) if m else html

    cut = re.search(r"<h3\b[^>]*>\s*禅道产品\s*<", region, re.I)
    if cut:
        region = region[: cut.start()]
    # also stop at pager/footer fragments
    cut2 = re.search(r"<ul class=\"pager", region, re.I)
    if cut2:
        region = region[: cut2.start()]
    return region


def parse_table(table_html: str) -> list[list[str]]:
    """Parse possibly-unclosed table HTML into rows."""
    rows_raw = re.split(r"<tr\b[^>]*>", table_html, flags=re.I)[1:]
    parsed: list[list[str]] = []
    for row in rows_raw:
        cells = re.findall(
            r"<(t[dh])\b[^>]*>(.*?)(?=<(?:t[dh]|tr|/tr|/tbody|/thead|/table)\b|$)",
            row,
            flags=re.I | re.S,
        )
        if not cells:
            continue
        vals = [clean_text(strip_tags(c[1])) for c in cells]
        while vals and vals[-1] == "":
            vals.pop()
        if vals:
            parsed.append(vals)
    return parsed


def table_to_md(rows: list[list[str]]) -> str:
    if not rows:
        return ""
    width = max(len(r) for r in rows)
    rows = [r + [""] * (width - len(r)) for r in rows]
    lines: list[str] = []
    for i, r in enumerate(rows):
        lines.append("| " + " | ".join(c if c else " " for c in r) + " |")
        if i == 0:
            lines.append("| " + " | ".join("---" for _ in r) + " |")
    return "\n".join(lines)


def parse_method_path(region: str) -> tuple[str, str]:
    method = ""
    path = ""
    mm = re.search(r'class="http-method[^"]*"[^>]*>\s*([A-Z]+)\s*<', region)
    if not mm:
        mm = re.search(r"class=http-method[^>]*>\s*([A-Z]+)\s*<", region)
    if mm:
        method = mm.group(1).strip()
    # class="path ..." or class=path ...
    pm = re.search(r'class="path[^"]*"[^>]*>\s*([^<]+?)\s*<', region)
    if not pm:
        pm = re.search(r"class=path[^>]*>\s*([^<]+?)\s*<", region)
    if pm:
        path = clean_text(pm.group(1)).replace("\xa0", " ").strip()
        path = re.sub(r"\s+", "", path)  # paths shouldn't have spaces
    return method, path


def parse_section_body(title: str, body: str) -> list[tuple[str, str]]:
    """Parse a section body preserving approximate document order."""
    items: list[tuple[str, str]] = []

    # Collect ordered events: table | pre | h4 | text-gap
    events: list[tuple[int, str, str]] = []  # (pos, kind, raw)

    for tm in re.finditer(r"<table\b[^>]*>.*?</table>", body, re.S | re.I):
        events.append((tm.start(), "table", tm.group(0)))
    for cm in re.finditer(
        r"<pre\b[^>]*>\s*(?:<code\b[^>]*>)?(.*?)(?:</code>\s*)?</pre>",
        body,
        re.S | re.I,
    ):
        events.append((cm.start(), "code", cm.group(1)))
    for hm in re.finditer(r"<h4\b[^>]*>(.*?)</h4>", body, re.S | re.I):
        events.append((hm.start(), "h4", hm.group(1)))

    events.sort(key=lambda x: x[0])

    # Build masked body for loose text between events
    mask = body
    for _, kind, raw in events:
        if kind == "table":
            mask = mask.replace(raw, "\0" * len(raw), 1)
        elif kind == "code":
            # replace the whole pre block roughly
            pass

    if not events:
        text_loose = clean_text(strip_tags(body))
        if text_loose:
            items.append(("p", text_loose))
        return items

    # Walk events in order, emit preceding text + event
    cursor = 0
    for pos, kind, raw in events:
        before = body[cursor:pos]
        # strip nested structured tags from before
        before_clean = re.sub(r"<table\b[\s\S]*?</table>", "", before, flags=re.I)
        before_clean = re.sub(r"<pre\b[\s\S]*?</pre>", "", before_clean, flags=re.I)
        before_clean = re.sub(r"<h4\b[\s\S]*?</h4>", "", before_clean, flags=re.I)
        t = clean_text(strip_tags(before_clean))
        if t:
            items.append(("p", t))

        if kind == "table":
            rows = parse_table(raw)
            md = table_to_md(rows)
            if md:
                items.append(("table", md))
            # advance cursor past this table
            end_m = re.match(r"<table\b[^>]*>.*?</table>", body[pos:], re.S | re.I)
            cursor = pos + (end_m.end() if end_m else len(raw))
        elif kind == "code":
            code = strip_tags(raw).replace("\r\n", "\n").strip("\n")
            if code.strip():
                items.append(("code", code))
            end_m = re.match(
                r"<pre\b[^>]*>\s*(?:<code\b[^>]*>)?.*? (?:</code>\s*)?</pre>".replace(" ", ""),
                body[pos:],
                re.S | re.I,
            )
            # simpler advance: find </pre> after pos
            pre_end = re.search(r"</pre>", body[pos:], re.I)
            cursor = pos + (pre_end.end() if pre_end else 1)
        elif kind == "h4":
            ht = clean_text(strip_tags(raw))
            if ht:
                items.append(("h4", ht))
            h_end = re.search(r"</h4>", body[pos:], re.I)
            cursor = pos + (h_end.end() if h_end else 1)

    after = body[cursor:]
    after = re.sub(r"<table\b[\s\S]*?</table>", "", after, flags=re.I)
    after = re.sub(r"<pre\b[\s\S]*?</pre>", "", after, flags=re.I)
    t = clean_text(strip_tags(after))
    if t:
        items.append(("p", t))

    if title == "请求URL":
        texts = [x for x in items if x[0] == "p"]
        others = [x for x in items if x[0] != "p"]
        items = texts + others

    return items


def parse_api_sections(html: str) -> tuple[str, str, dict[str, list[tuple[str, str]]]]:
    region = extract_content_region(html)
    method, path = parse_method_path(region)

    # Fallback method/path from whole html (sometimes path uses &nbsp;)
    if not method:
        mm = re.search(r"http-method[^>]*>\s*([A-Z]+)\s*<", html)
        if mm:
            method = mm.group(1).strip()
    if not path:
        pm = re.search(r'class="?path[^>]*>\s*([^<]+?)\s*<', html)
        if pm:
            path = clean_text(pm.group(1)).replace("\xa0", "").replace(" ", "")

    sections: dict[str, list[tuple[str, str]]] = {}
    parts = re.split(r"<h3\b[^>]*>", region, flags=re.I)
    for part in parts[1:]:
        hm = re.match(r"(.*?)</h3>(.*)", part, re.S | re.I)
        if not hm:
            continue
        title = clean_text(strip_tags(hm.group(1)))
        if not title or title in FOOTER_HEADINGS:
            continue
        body = hm.group(2)
        # stop body at next accidental footer
        stop = re.search(r"<h3\b[^>]*>\s*禅道产品", body, re.I)
        if stop:
            body = body[: stop.start()]
        items = parse_section_body(title, body)
        if items:
            sections[title] = items
    return method, path, sections


def parse_page(html: str, meta: tuple[str, str, str, str, str, str]) -> ApiDoc:
    module_id, module_name, api_id, section_no, title, url = meta
    doc = ApiDoc(
        module_id=module_id,
        module_name=module_name,
        api_id=api_id,
        section_no=section_no,
        title=title,
        url=url,
    )

    m = re.search(r"<title>(.*?)</title>", html, re.I | re.S)
    if m:
        doc.page_title = clean_text(m.group(1))

    try:
        method, path, sections = parse_api_sections(html)
        doc.method = method
        doc.path = path
        doc.sections = sections
        if api_id == "1397" or "配置使用" in title:
            doc.is_guide = True
    except Exception as e:  # noqa: BLE001
        doc.raw_ok = False
        doc.error = str(e)
    return doc


def render_section_items(items: list[tuple[str, str]]) -> list[str]:
    lines: list[str] = []
    for kind, text in items:
        if kind == "code":
            fence = "json" if text.lstrip().startswith(("{", "[")) else ""
            lines.append(f"```{fence}")
            lines.append(text)
            lines.append("```")
            lines.append("")
        elif kind == "table":
            lines.append(text)
            lines.append("")
        elif kind == "h4":
            lines.append(f"#### {text}")
            lines.append("")
        else:
            lines.append(text)
            lines.append("")
    return lines


def render_api_md(doc: ApiDoc) -> str:
    lines: list[str] = []
    lines.append(f"## {doc.section_no} {doc.title}")
    lines.append("")
    lines.append(f"- **手册编号**: `{doc.section_no}`")
    lines.append(f"- **页面 ID**: `{doc.api_id}`")
    lines.append(f"- **官方文档**: {doc.url}")
    if doc.method or doc.path:
        lines.append(f"- **Method**: `{doc.method or '?'}`")
        lines.append(f"- **Path**: `{doc.path or '?'}`")
        if doc.path:
            p = doc.path if doc.path.startswith("/") else f"/{doc.path}"
            lines.append(f"- **完整 URL 模板**: `https://{{host}}/api.php/v1{p}`")
    lines.append("")

    if not doc.raw_ok:
        lines.append(f"> 解析失败: {doc.error}")
        lines.append("")
        return "\n".join(lines)

    sections = doc.sections
    if not sections:
        lines.append("_（页面无可解析内容）_")
        lines.append("")
        return "\n".join(lines)

    ordered: list[str] = []
    for key in SECTION_ORDER:
        for sk in sections:
            if sk == key or key in sk:
                if sk not in ordered:
                    ordered.append(sk)
    for sk in sections:
        if sk not in ordered:
            ordered.append(sk)

    for sk in ordered:
        lines.append(f"### {sk}")
        lines.append("")
        items = sections[sk]
        if not items:
            lines.append("_（无内容）_")
            lines.append("")
            continue
        lines.extend(render_section_items(items))

    return "\n".join(lines).rstrip() + "\n"


MODULE_SLUGS = {
    "2.1": "01-config-faq",
    "2.2": "02-token",
    "2.3": "03-dept",
    "2.4": "04-user",
    "2.5": "05-program",
    "2.6": "06-product",
    "2.7": "07-product-plan",
    "2.8": "08-release",
    "2.9": "09-story",
    "2.10": "10-project",
    "2.11": "11-build",
    "2.12": "12-execution",
    "2.13": "13-task",
    "2.14": "14-bug",
    "2.15": "15-testcase",
    "2.16": "16-testtask",
    "2.17": "17-feedback",
    "2.18": "18-ticket",
}


def module_filename(module_id: str, module_name: str) -> str:
    slug = MODULE_SLUGS.get(module_id, module_id.replace(".", "-"))
    return f"{slug}-{module_name}.md"


def write_index(modules: dict[str, list[ApiDoc]]) -> None:
    lines = [
        "# 禅道 RESTful API v1.0 接口文档索引",
        "",
        "> 来源：https://www.zentao.net/book/api/ （禅道二次开发手册 > 禅道 RESTful APIv1.0 开发手册）",
        ">",
        f"> 共 **{sum(len(v) for v in modules.values())}** 个接口/页面，按模块拆分存储。",
        ">",
        "> 由 `scripts/fetch_zentao_api_docs.py` 自动抓取生成，字段以官方页面为准。",
        "",
        "## 模块列表",
        "",
        "| 编号 | 模块 | 接口数 | 文档 |",
        "| --- | --- | ---: | --- |",
    ]
    for mid in sorted(modules.keys(), key=lambda x: [int(p) for p in x.split(".")]):
        docs = modules[mid]
        name = docs[0].module_name
        fname = module_filename(mid, name)
        lines.append(f"| {mid} | {name} | {len(docs)} | [{fname}](./{fname}) |")

    lines.extend(["", "## 全部接口速查", "", "| 编号 | 接口 | Method | Path | 文档锚点 |", "| --- | --- | --- | --- | --- |"])
    for mid in sorted(modules.keys(), key=lambda x: [int(p) for p in x.split(".")]):
        for d in modules[mid]:
            anchor = d.section_no.replace(".", "")
            fname = module_filename(d.module_id, d.module_name)
            method = d.method or ("—" if d.is_guide else "?")
            path = d.path or ("—" if d.is_guide else "?")
            lines.append(
                f"| {d.section_no} | {d.title} | `{method}` | `{path}` | [{d.section_no}](./{fname}#{d.section_no.replace('.', '')}-{d.title.replace(' ', '-')}) |"
            )

    lines.append("")
    (DOCS_DIR / "README.md").write_text("\n".join(lines), encoding="utf-8")


def write_module(module_id: str, docs: list[ApiDoc]) -> Path:
    name = docs[0].module_name
    fname = module_filename(module_id, name)
    path = DOCS_DIR / fname
    parts = [
        f"# {module_id} {name}",
        "",
        f"> 禅道 RESTful API v1.0 · 模块文档（共 {len(docs)} 个接口/页面）",
        ">",
        "> 自动抓取自官方手册，URL 基址：`https://{{host}}/api.php/v1`",
        "",
        "## 本模块接口",
        "",
        "| 编号 | 接口 | Method | Path |",
        "| --- | --- | --- | --- |",
    ]
    for d in docs:
        method = d.method or ("—" if d.is_guide else "?")
        pth = d.path or ("—" if d.is_guide else "?")
        parts.append(f"| {d.section_no} | {d.title} | `{method}` | `{pth}` |")
    parts.append("")
    parts.append("---")
    parts.append("")

    for d in docs:
        parts.append(render_api_md(d))
        parts.append("")
        parts.append("---")
        parts.append("")

    path.write_text("\n".join(parts).rstrip() + "\n", encoding="utf-8")
    return path


def main() -> None:
    assert len(ENDPOINTS) == 98, f"expected 98 endpoints, got {len(ENDPOINTS)}"
    DOCS_DIR.mkdir(parents=True, exist_ok=True)

    modules: dict[str, list[ApiDoc]] = defaultdict(list)
    failures: list[str] = []

    for i, meta in enumerate(ENDPOINTS, 1):
        module_id, module_name, api_id, section_no, title, url = meta
        print(f"[{i:02d}/98] {section_no} {title} ...", flush=True)
        try:
            html = fetch(url, api_id)
            doc = parse_page(html, meta)
            if not doc.is_guide and not doc.method and not doc.sections:
                # try re-parse with alternate: force no cache once
                print("  empty parse, refetch...")
                html = fetch(url, api_id, force=True)
                doc = parse_page(html, meta)
            modules[module_id].append(doc)
            status = f"method={doc.method or '-'} path={doc.path or '-'} sections={len(doc.sections)}"
            if doc.is_guide:
                status = f"guide sections={len(doc.sections)}"
            print(f"  ok: {status}", flush=True)
            time.sleep(0.25)
        except Exception as e:  # noqa: BLE001
            print(f"  FAIL: {e}", flush=True)
            failures.append(f"{section_no} {title}: {e}")
            modules[module_id].append(
                ApiDoc(
                    module_id=module_id,
                    module_name=module_name,
                    api_id=api_id,
                    section_no=section_no,
                    title=title,
                    url=url,
                    raw_ok=False,
                    error=str(e),
                )
            )

    written = []
    for mid in sorted(modules.keys(), key=lambda x: [int(p) for p in x.split(".")]):
        p = write_module(mid, modules[mid])
        written.append(p)
        print(f"wrote {p.relative_to(ROOT)}")

    write_index(modules)
    print(f"wrote { (DOCS_DIR / 'README.md').relative_to(ROOT) }")
    print(f"modules={len(written)} total={sum(len(v) for v in modules.values())} failures={len(failures)}")
    if failures:
        print("FAILURES:")
        for f in failures:
            print(" -", f)


if __name__ == "__main__":
    main()
