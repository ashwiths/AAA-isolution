from PIL import Image
import numpy as np

f1 = "C:/Users/infan/.gemini/antigravity/brain/5aaa15ad-ed6b-4d97-ba5f-a7ec88ac979e/.user_uploaded/media_1793889720481_31a25734.jpg"
f2 = "C:/Users/infan/.gemini/antigravity/brain/5aaa15ad-ed6b-4d97-ba5f-a7ec88ac979e/.user_uploaded/media_1793889751816_6ab2889b.jpg"

im1 = Image.open(f1)
im2 = Image.open(f2)

# Notice sizes: im1 is 1024x506, im2 is 1024x552!
# Let's see: im1 height is 506.
# If im2 is cropped from y=0 to 506 or y=20 to 526?
# Let's inspect where im1 came from.
# Is im1 a screenshot from localhost:3000/about?
# In im1, is there a Next.js badge at bottom left?
# In media_1793887984332_ad048c29.jpg, there was an "N" Next.js badge at bottom left!
# Does im1 have the "N" badge?
p1 = np.array(im1)
# bottom left corner of im1 (y around 480..506, x around 0..40):
print("im1 corner:", p1[480:, :40].mean())
with open("public/images/about/compare_uploads.txt", "w") as f:
    f.write(f"im1 size: {im1.size}, im2 size: {im2.size}\n")
    # Let's check navbar text in im1 vs im2
    f.write(f"im1 crop(200, 20, 350, 50) mean: {p1[20:50, 200:350].mean()}\n")

