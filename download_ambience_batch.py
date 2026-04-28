import os
import requests

images = {
    # Virar Ambiance
    "virar_ambience_1.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgMCwy7nQgwE=s2048",
    "virar_ambience_2.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgIDOiqO8cQ=s2048",
    "virar_ambience_3.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEIC4tMXDlaH9Tw=s2048",
    "virar_ambience_4.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgICvpJalNQ=s2048",
    "virar_ambience_5.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgIDOh8-_1gE=s2048",
    
    # Vasai Ambiance
    "vasai_ambience_1.jpg": "https://lh3.googleusercontent.com/p/CIABIhAeolzd-HQdP9I5f-ODOHx8=s2048",
    "vasai_ambience_2.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgICGxeidSQ=s2048",
    "vasai_ambience_3.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgICG7YnLcg=s2048",
    "vasai_ambience_4.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgICmvYjNuwE=s2048",
    "vasai_ambience_5.jpg": "https://lh3.googleusercontent.com/p/CIHM0ogKEICAgICmvc6CQA=s2048",
    
    # Boisar Ambiance
    "boisar_ambience_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHfD_x7s34mYfqJppkUHp4oBOtxsZQwd3IGFxAdA5RdZubYT2h0RErJJMwZKUJiWzB_W1b4-OZH2P5LeqotJ6yyLK2tcm0QXbpguiON_CGSmH_0IHwykX0MdYnIJ17cxS2r-zdW-SUJ3nQ=s2048",
    "boisar_ambience_2.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHEsq9bMIZUvTMT4fZFimiJjJtxqmg43PZikP7YdHJFE_zQresj_SQO0pakLU2O76hDu4HTOycKqHUVtLQprIBEEz3WkO1jOzq_GMtv1sgV4ELfPhBCtNYuSVBjmZhK16oIy0nbouoK1Co=s2048",
    "boisar_ambience_3.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGju1ZeTpHofDFZB4ekDddpowXy5jtvf9vRVmaJWJ9-_i-HkZycAapxXFO8EZJSvKzes0nuMLfJNaZC2Y6wHuM-TGui4g96pRLPPYmx80D4_7gQJ6Zn7egHAKlHTFi0NTHFr0iSVu2fnkE=s2048",
    "boisar_ambience_4.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjoZ0WlRGPlJeKiBghmsTVgdDnlM_MFsZxvsNMiBM_NPP6rfUiPlxFlTSuxLu7GRK3tPiWxq7C7vm3dVRAfROYW8KtcbJcmDvDTYISqKfD8mI7kX4_mAQmgIYJxrfzPxz2bqllbMuYWsQ=s2048",
    "boisar_ambience_5.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHJcHSnuOXgUlpdsW8ekwaFplgC-33gCx8ZEVDOnQeNssAaNYNhzh94QHihZkWOh-rLM8JItyL_ZoVz7e9R1i7mWSG-Sr1L3-jGiEc9F2e8LtfY-P6Dt0mTIOsMdxKG_k6s3keJuKo3otY=s2048",
    
    # Palghar Ambiance
    "palghar_ambience_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFKp8j4RWsX9CVXcKZui4E_H89YLxiLPWxj1p-BRY2br6yopImlS_k8xcvKhTtpy1WV9dn_hrbZZxbPuH0EJP2cLNb5IQ0CUSxo3kMjDdanQ-qRX3ExeyRo-0uWpf10bS-L9tO5iQ=s2048",
    "palghar_ambience_2.jpg": "https://lh3.googleusercontent.com/p/AF1QipMwAQ8JzFVnYtv3nRMsX1DCVMb10JR8ez2GGdsn=s2048",
    "palghar_ambience_3.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGafnWhqpwoiPo0ifVHVLYY96nRCbrZJqjphQIN7DGmfQSayAPiRl6PI4TSCk4EZL0cpIzqJJcwqGRtbq5ZNvT1_xG9-uewhY1zg5T9dwM6EXozOT60yMF0R-cVS3bgNHuJ9A3D=s2048",
    "palghar_ambience_4.jpg": "https://lh3.googleusercontent.com/p/AF1QipObwRBW7fQ_ocQeNa0tzBV2AyF-Q8wH5YBoqPoh=s2048",
    "palghar_ambience_5.jpg": "https://lh3.googleusercontent.com/p/AF1QipN2dlbyEg8FYiwB0q1R5Eq_Xqnpm4oQqfLWD3sO=s2048"
}

output_dir = "f:/stone oven/public/real_gallery"
os.makedirs(output_dir, exist_ok=True)

for filename, url in images.items():
    print(f"Downloading {filename}...")
    try:
        response = requests.get(url, timeout=15)
        if response.status_code == 200:
            with open(os.path.join(output_dir, filename), "wb") as f:
                f.write(response.content)
            print(f"Saved {filename}")
        else:
            print(f"Failed to download {filename}: Status {response.status_code}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
