from PIL import Image

source = Image.open("public/hero.png").convert("RGBA")
width, height = source.size
side = min(width, height)
left = (width - side) // 2
top = (height - side) // 2
cropped = source.crop((left, top, left + side, top + side))

icon = cropped.resize((512, 512), Image.Resampling.LANCZOS)
icon.save("src/app/icon.png", format="PNG")

favicon_sizes = [(256, 256), (128, 128), (64, 64), (48, 48), (32, 32), (16, 16)]
favicon_images = [cropped.resize(size, Image.Resampling.LANCZOS) for size in favicon_sizes]
favicon_images[0].save(
    "src/app/favicon.ico",
    format="ICO",
    sizes=[(img.width, img.height) for img in favicon_images],
    append_images=favicon_images[1:],
)

print("Generated src/app/icon.png and src/app/favicon.ico from hero.png")
