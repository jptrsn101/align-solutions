"""Set print boxes on the flyer PDF: BleedBox = full 216 x 303mm page,
TrimBox = A4, inset 3mm on every side. Usage: python set-boxes.py in.pdf out.pdf"""
import sys
from pypdf import PdfReader, PdfWriter
from pypdf.generic import RectangleObject

MM = 72 / 25.4
BLEED = 3 * MM

reader = PdfReader(sys.argv[1])
writer = PdfWriter()
for page in reader.pages:
    w, h = float(page.mediabox.width), float(page.mediabox.height)
    page.bleedbox = RectangleObject([0, 0, w, h])
    page.trimbox = RectangleObject([BLEED, BLEED, w - BLEED, h - BLEED])
    writer.add_page(page)
with open(sys.argv[2], 'wb') as f:
    writer.write(f)
