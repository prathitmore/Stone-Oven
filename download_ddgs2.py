import os
import requests
from duckduckgo_search import DDGS
import time

items = [
    ("fried_rice", "Chinese Fried Rice close up food photography high quality"),
    ("chilly_garlic_noodles", "Chilly Garlic Noodles close up food photography high quality"),
    ("chicken_chilly_garlic_fried_rice", "Chicken Fried Rice close up food photography high quality"),
    ("veg_manchurian", "Veg Manchurian gravy close up food photography high quality"),
    ("bbq_chicken_sandwich", "BBQ Chicken Sandwich close up food photography high quality"),
    ("garden_vegetable_sandwich", "Vegetable Sandwich close up food photography high quality"),
    ("asian_chicken_salad", "Asian Chicken Salad close up food photography high quality"),
    ("classic_caesar", "Classic Caesar Salad close up food photography high quality"),
    ("chocolate_brownie", "Chocolate Brownie close up food photography high quality"),
    ("shakes", "Chocolate Milkshake in glass jar close up food photography high quality")
]

os.makedirs('f:/stone oven/public/dishes', exist_ok=True)
ddgs = DDGS()

for name, query in items:
    print(f"Searching for {name}...")
    try:
        results = list(ddgs.images(query, max_results=2, safesearch="Off"))
        if results:
            for res in results:
                img_url = res['image']
                print(f"Downloading {img_url}")
                try:
                    response = requests.get(img_url, timeout=10, headers={'User-Agent': 'Mozilla/5.0'})
                    if response.status_code == 200 and 'image' in response.headers.get('content-type', ''):
                        with open(f"f:/stone oven/public/dishes/{name}.jpg", 'wb') as f:
                            f.write(response.content)
                        print(f"Saved {name}.jpg")
                        break
                except Exception as e:
                    pass
        time.sleep(3) # avoid ratelimit
    except Exception as e:
        print(f"Search failed for {name}: {e}")
