import os
import urllib.request
import re
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

items = {
    "fried_rice": "fried rice",
    "chilly_garlic_noodles": "spicy noodles",
    "chicken_chilly_garlic_fried_rice": "chicken fried rice",
    "bbq_chicken_sandwich": "chicken sandwich",
    "garden_vegetable_sandwich": "vegetable sandwich",
    "asian_chicken_salad": "chicken salad",
    "chocolate_brownie": "chocolate brownie",
    "shakes": "chocolate milkshake",
    "peri_peri_chicken_pizza": "chicken pizza",
    "margherita_pizza": "margherita pizza",
    "tandoori_chicken_pizza": "spicy chicken pizza",
    "meat_feast_pizza": "meat pizza",
    "cheese_corn_pizza": "cheese corn pizza",
    "peri_peri_paneer_pizza": "paneer pizza",
    "bbq_paneer_pizza": "bbq pizza",
    "chicken_lasagna": "lasagna",
    "white_sauce_pasta": "alfredo pasta",
    "nachos": "loaded nachos",
    "tacos": "mexican tacos",
    "pesto_chicken_pizza": "pesto pizza",
    "veg_cherry_tomato_pizza": "tomato basil pizza",
    "veg_manchurian": "manchurian gravy"
}

os.makedirs('f:/stone oven/public/dishes', exist_ok=True)

for name, query in items.items():
    print(f"Searching Unsplash for {query}...")
    url = f"https://unsplash.com/s/photos/{query.replace(' ', '-')}"
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        urls = re.findall(r'(https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+)', html)
        urls = list(set(urls)) # unique
        if urls:
            img_url = urls[0] + "?auto=format&fit=crop&w=600&q=80"
            print(f"Downloading {img_url}")
            img_req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(img_req, context=ctx) as response, open(f"f:/stone oven/public/dishes/{name}.jpg", 'wb') as out_file:
                out_file.write(response.read())
            print(f"Saved {name}.jpg")
        else:
            print(f"No results for {query}")
    except Exception as e:
        print(f"Failed {query}: {e}")
    time.sleep(1)
