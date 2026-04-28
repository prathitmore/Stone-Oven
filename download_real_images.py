import os
import requests
from duckduckgo_search import DDGS

queries = [
    ("real_virar_1", "Stone Oven Virar pizza restaurant site:instagram.com"),
    ("real_virar_2", "Stone Oven Virar interior restaurant"),
    ("real_virar_3", "Stone Oven Virar review food"),
    ("real_vasai_1", "Stone Oven Vasai restaurant pizza"),
    ("real_vasai_2", "Stone Oven Vasai interior"),
    ("real_palghar_1", "Stone Oven Palghar pizza"),
    ("real_boisar_1", "Stone Oven Boisar pizza"),
    ("real_fb_1", "Stone Oven Virar pizza site:facebook.com"),
    ("real_fb_2", "Stone Oven restaurant site:facebook.com"),
    ("real_google_1", "Stone Oven Virar google maps photos"),
    ("real_google_2", "Stone Oven Vasai google reviews")
]

os.makedirs('f:/stone oven/public/real_gallery', exist_ok=True)
ddgs = DDGS()

for name, query in queries:
    print(f"Searching for {name}...")
    try:
        results = list(ddgs.images(query, max_results=5, safesearch="Off"))
        if results:
            for res in results:
                img_url = res['image']
                print(f"Attempting: {img_url}")
                try:
                    # Ignore annoying domains
                    if 'facebook' in img_url and 'lookaside' not in img_url and 'scontent' not in img_url:
                        pass
                    response = requests.get(img_url, timeout=5)
                    if response.status_code == 200:
                        content_type = response.headers.get('content-type', '')
                        if 'image' in content_type:
                            with open(f"f:/stone oven/public/real_gallery/{name}.jpg", 'wb') as f:
                                f.write(response.content)
                            print(f"Saved {name}.jpg")
                            break
                except Exception as e:
                    pass
    except Exception as e:
        print(f"Failed {name}")
