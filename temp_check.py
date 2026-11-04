
import shutil
from PIL import Image

# test_crop600.png is 486x457
img = Image.open("public/images/test_crop600.png")
img.save("public/images/hero-portrait-clean.png", "PNG")
img.save("public/images/hero-portrait.png", "PNG")
img.save("public/images/portrait.png", "PNG")
print("Saved hero-portrait-clean.png, hero-portrait.png, portrait.png successfully!")
