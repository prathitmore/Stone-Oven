import urllib.request
import json
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

items = {
    "pesto_chicken_pizza": "Pizza",
    "bbq_paneer_pizza": "Pizza_margherita",
    "veg_cherry_tomato_pizza": "Neapolitan_pizza",
    "chicken_lasagna": "Lasagne",
    "white_sauce_pasta": "Fettuccine_Alfredo",
    "nachos": "Nachos",
    "tacos": "Taco",
    "fried_rice": "Fried_rice",
    "chilly_garlic_noodles": "Chinese_noodles",
    "chicken_chilly_garlic_fried_rice": "Fried_rice",
    "veg_manchurian": "Indian_Chinese_cuisine",
    "bbq_chicken_sandwich": "Chicken_sandwich",
    "garden_vegetable_sandwich": "Vegetable_sandwich",
    "asian_chicken_salad": "Chinese_chicken_salad",
    "classic_caesar": "Caesar_salad",
    "chocolate_brownie": "Chocolate_brownie",
    "shakes": "Milkshake"
}

def get_wiki_image(title):
    url = f"https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pithumbsize=600&titles={title}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'thumbnail' in pages[page_id]:
                    return pages[page_id]['thumbnail']['source']
    except Exception as e:
        print(e)
    return None

os.makedirs('f:/stone oven/public/dishes', exist_ok=True)

for name, wiki_title in items.items():
    if os.path.exists(f"f:/stone oven/public/dishes/{name}.jpg") or os.path.exists(f"f:/stone oven/public/dishes/{name}.png"):
        print(f"Skipping {name}, already exists")
        continue
    img_url = get_wiki_image(wiki_title)
    if img_url:
        print(f"Downloading {name} from {img_url}")
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, context=ctx) as response, open(f"f:/stone oven/public/dishes/{name}.jpg", 'wb') as out_file:
                out_file.write(response.read())
        except Exception as e:
            print(f"Failed to download {name}: {e}")
    else:
        print(f"Failed to find image for {name}")
