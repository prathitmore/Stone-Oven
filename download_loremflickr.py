import urllib.request
import os

items = {
    "fried_rice": "fried,rice,food",
    "chilly_garlic_noodles": "noodles,garlic,food",
    "chicken_chilly_garlic_fried_rice": "fried,rice,chicken,food",
    "bbq_chicken_sandwich": "sandwich,bbq,food",
    "garden_vegetable_sandwich": "sandwich,vegetable,food",
    "asian_chicken_salad": "salad,chicken,food",
    "chocolate_brownie": "brownie,chocolate,food",
    "shakes": "milkshake,chocolate,food",
    "peri_peri_chicken_pizza": "pizza,chicken,food",
    "margherita_pizza": "pizza,margherita,food",
    "tandoori_chicken_pizza": "pizza,tandoori,food",
    "meat_feast_pizza": "pizza,meat,food",
    "cheese_corn_pizza": "pizza,corn,food",
    "peri_peri_paneer_pizza": "pizza,paneer,food",
    "bbq_paneer_pizza": "pizza,bbq,food",
    "chicken_lasagna": "lasagna,food"
}

for name, query in items.items():
    url = f"https://loremflickr.com/800/600/{query}/all"
    try:
        urllib.request.urlretrieve(url, f"f:/stone oven/public/dishes/{name}.jpg")
        print(f"Downloaded {name}.jpg")
    except Exception as e:
        print(f"Failed {name}: {e}")
