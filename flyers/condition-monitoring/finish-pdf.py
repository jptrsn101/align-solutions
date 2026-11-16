"""Turn a Chrome-rendered flyer PDF into a print-ready CMYK PDF.

1. Rewrites every RGB fill and stroke as the exact brand CMYK build
   (Brand Guidelines p17), so the printer gets 87 78 0 0 for cobalt rather
   than a profile's guess. Fails on any colour that is not in the map.
2. Sets BleedBox to the full 216 x 303mm page and TrimBox to A4, 3mm in.

Usage: python finish-pdf.py in-rgb.pdf out.pdf   (needs pypdf)
"""
import re
import sys
from pypdf import PdfReader, PdfWriter
from pypdf.generic import ContentStream, RectangleObject

# RGB (0-255) -> CMYK (0-100)
CMYK = {
    (62, 81, 163): (87, 78, 0, 0),     # cobalt
    (255, 255, 255): (0, 0, 0, 0),     # white
    (156, 156, 156): (0, 0, 0, 38),    # grey 60
    (67, 67, 68): (67, 60, 58, 44),    # grey 20
    (27, 36, 86): (100, 95, 36, 31),   # navy, background mark on cobalt
    (56, 56, 58): (67, 60, 58, 56),    # deep grey, background mark on grey 20
    (237, 237, 237): (0, 0, 0, 7),     # light grey, background mark on white
}

MM = 72 / 25.4
BLEED = 3 * MM
OP = re.compile(rb'(?<![\w.])([\d.]+) ([\d.]+) ([\d.]+) (rg|RG)(?!\w)')


def to_cmyk(match):
    rgb = tuple(round(float(v) * 255) for v in match.group(1, 2, 3))
    if rgb not in CMYK:
        raise SystemExit(f'Colour {rgb} is not in the brand CMYK map')
    c, m, y, k = (v / 100 for v in CMYK[rgb])
    op = b'k' if match.group(4) == b'rg' else b'K'
    return b'%g %g %g %g %s' % (c, m, y, k, op)


writer = PdfWriter(clone_from=PdfReader(sys.argv[1]))
for page in writer.pages:
    data = page.get_contents().get_data()
    data, count = OP.subn(to_cmyk, data)
    if re.search(rb'(?<!\w)(sc|scn|SC|SCN)(?!\w)', data):
        raise SystemExit('Unexpected colour-space operators; check the PDF by hand')
    stream = ContentStream(None, writer)
    stream.set_data(data)
    page.replace_contents(stream)
    w, h = float(page.mediabox.width), float(page.mediabox.height)
    page.bleedbox = RectangleObject([0, 0, w, h])
    page.trimbox = RectangleObject([BLEED, BLEED, w - BLEED, h - BLEED])
    print(f'{count} colour operators converted to CMYK')
with open(sys.argv[2], 'wb') as f:
    writer.write(f)
