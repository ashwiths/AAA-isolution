import os

routes = []
for root, dirs, files in os.walk("app"):
    for f in files:
        if f.endswith((".tsx", ".ts", ".jsx", ".js")):
            routes.append(os.path.join(root, f))

with open("public/images/about/app_routes.txt", "w") as out:
    out.write("\n".join(routes))

