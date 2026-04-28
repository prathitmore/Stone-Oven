import urllib.request
import urllib.parse
import os
import ssl
import sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

items = [
    ("fried_rice", "Chinese Fried Rice close up food photography high quality dark background cinematic lighting"),
    ("chilly_garlic_noodles", "Spicy Chilly Garlic Noodles close up food photography high quality dark background"),
    ("chicken_chilly_garlic_fried_rice", "Chicken Chilly Garlic Fried Rice close up food photography high quality"),
    ("bbq_chicken_sandwich", "BBQ Chicken Sandwich close up food photography high quality"),
    ("garden_vegetable_sandwich", "Fresh Garden Vegetable Sandwich close up food photography high quality"),
    ("asian_chicken_salad", "Asian Chicken Salad close up food photography high quality"),
    ("chocolate_brownie", "Warm Chocolate Brownie close up food photography high quality"),
    ("shakes", "Chocolate Milkshake in glass jar close up food photography"),
    ("pesto_chicken_pizza", "Pesto Chicken Pizza close up food photography high quality dark background"),
    ("bbq_paneer_pizza", "BBQ Paneer Pizza close up food photography high quality dark background"),
    ("veg_cherry_tomato_pizza", "Cherry Tomato Pizza close up food photography high quality dark background"),
    ("chicken_lasagna", "Chicken Lasagna close up food photography high quality dark background"),
    ("white_sauce_pasta", "White Sauce Pasta Alfredo close up food photography high quality dark background"),
    ("nachos", "Loaded Nachos with cheese salsa close up food photography high quality dark background"),
    ("tacos", "Mexican Tacos close up food photography high quality dark background"),
    ("veg_manchurian", "Veg Manchurian gravy close up food photography high quality dark background")
]

os.makedirs('f:/stone oven/public/dishes', exist_ok=True)

for name, prompt in items:
    print(f"Generating {name} via api.airforce...", flush=True)
    encoded_prompt = urllib.parse.quote(prompt)
    url = f"https://api.airforce/imagine?prompt={encoded_prompt}"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, context=ctx, timeout=30) as response, open(f"f:/stone oven/public/dishes/{name}.jpg", 'wb') as out_file:
            out_file.write(response.read())
        print(f"Saved {name}.jpg", flush=True)
    except Exception as e:
        print(f"Failed {name}: {e}", flush=True)
