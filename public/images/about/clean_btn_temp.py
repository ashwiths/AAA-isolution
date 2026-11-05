import os
import glob

temp_patterns = [
    "public/images/about/find_*.py",
    "public/images/about/*_coords.txt",
    "public/images/about/crop_*.png",
    "public/images/about/clean_temp.py"
]

for pat in temp_patterns:
    for f in glob.glob(pat):
        try:
            os.remove(f)
        except:
            pass

