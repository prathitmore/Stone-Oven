import os
import requests

images = {
    "virar_food_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFEx_WO57Q5GVu4lKPwdPMO5wUjqgs9zEFZeAiuVIsdX5ee3myjtnV_ogb9PdbgBgmmyxoM9RAKsySF2_rzesAWEmrHargt6CRHBX4PnpVJbimJJ17iRvOa6arTK5wVftKkISem=s1000",
    "virar_food_2.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE-Vtas5wGztrHIrZaKkAMoI6JJNSvfk4SZ_Nh-wNyUlotEtt9nTebyF4E166jhpfsT9KixqPh4_lWIKyFu_pnAcGS9-pDzW5R52gYomNiAEbxfHL9-46kMypej95RXvRF_Ar6bsg=s1000",
    "virar_food_3.jpg": "https://lh3.googleusercontent.com/p/AF1QipPuw_rBzVRVuCRIx1mkQRgh8tgWfJoUDZDs_510=s1000",
    "virar_interior_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGWHyO080y4-x4IqpRbK7SBIV8HpfKVe2PjdKx10uTE_4EWrQvU1fELrIfgpPGH4ZHcpIqJcctdUbQAYDI9zRtEi5KbUPEEcAGkfdJL2z9RsRJTdae_ufPtXeVrpsJB_DnMm6hN=s1000",
    "virar_interior_2.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHhar0pjwSFb_t0zO3NEdxRMS7V0Kp4HY4peeXc2X5dyWJxU8Uh5c-ZngaIP3QLt924g0laMujOKQHiL15ypPtWteZkCkGM84-er1QiySUDF0NOZ6v7uuY6RL1tz-KZgYov6qprI1rojGo=s1000",
    "boisar_food_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHEsq9bMIZUvTMT4fZFimiJjJtxqmg43PZikP7YdHJFE_zQresj_SQO0pakLU2O76hDu4HTOycKqHUVtLQprIBEEz3WkO1jOzq_GMtv1sgV4ELfPhBCtNYuSVBjmZhK16oIy0nbouoK1Co=s1000",
    "boisar_food_2.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGju1ZeTpHofDFZB4ekDddpowXy5jtvf9vRVmaJWJ9-_i-HkZycAapxXFO8EZJSvKzes0nuMLfJNaZC2Y6wHuM-TGui4g96pRLPPYmx80D4_7gQJ6Zn7egHAKlHTFi0NTHFr0iSVu2fnkE=s1000",
    "boisar_food_3.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjoZ0WlRGPlJeKiBghmsTVgdDnlM_MFsZxvsNMiBM_NPP6rfUiPlxFlTSuxLu7GRK3tPiWxq7C7vm3dVRAfROYW8KtcbJcmDvDTYISqKfD8mI7kX4_mAQmgIYJxrfzPxz2bqllbMuYWsQ=s1000",
    "boisar_interior_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHfD_x7s34mYfqJppkUHp4oBOtxsZQwd3IGFxAdA5RdZubYT2h0RErJJMwZKUJiWzB_W1b4-OZH2P5LeqotJ6yyLK2tcm0QXbpguiON_CGSmH_0IHwykX0MdYnIJ17cxS2r-zdW-SUJ3nQ=s1000",
    "palghar_food_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGafnWhqpwoiPo0ifVHVLYY96nRCbrZJqjphQIN7DGmfQSayAPiRl6PI4TSCk4EZL0cpIzqJJcwqGRtbq5ZNvT1_xG9-uewhY1zg5T9dwM6EXozOT60yMF0R-cVS3bgNHuJ9A3D=s1000",
    "palghar_food_2.jpg": "https://lh3.googleusercontent.com/p/AF1QipMwAQ8JzFVnYtv3nRMsX1DCVMb10JR8ez2GGdsn=s1000",
    "palghar_food_3.jpg": "https://lh3.googleusercontent.com/p/AF1QipObwRBW7fQ_ocQeNa0tzBV2AyF-Q8wH5YBoqPoh=s1000",
    "palghar_interior_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFKp8j4RWsX9CVXcKZui4E_H89YLxiLPWxj1p-BRY2br6yopImlS_k8xcvKhTtpy1WV9dn_hrbZZxbPuH0EJP2cLNb5IQ0CUSxo3kMjDdanQ-qRX3ExeyRo-0uWpf10bS-L9tO5iQ=s1000",
    "palghar_interior_2.jpg": "https://lh3.googleusercontent.com/p/AF1QipN2dlbyEg8FYiwB0q1R5Eq_Xqnpm4oQqfLWD3sO=s1000",
    "vasai_food_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEnvssRELqOTQEC62_9HMLtEMR0qJBUqaa6hJnUsWtv_OkrXkCDeKZeF3SXveSVxAYngFQ-NfZ9qzTbBwo5uYxCOcJCzDm52LUJ2mhyQKAo7Czcey6nb7k0QZo8CnXDpWyLtJA=s1000",
    "vasai_food_2.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHYgykCo-RBG5iz2lyGM1SnkNFmBQ0i4RWA9rLV5fpYWKr-qmJDb57RlKgznwoGrnPRgIibxxv8GWLltek6lnm24O2toDAOOLF9mHI205sZS7vVy3JjlkvxXpKbMc7XsE5n6_rQqxF0N3Rk=s1000",
    "vasai_food_3.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHajVnSzTjXqRBh9es2yi5w0xRFn0BAQXAAReIsxwdYmly0su5IfcxR28IG3FUCRaASoS1SaWMAX9T2by5CmqUJabhC48DbtSDVdQGTA9d7EAdEyao51giVbNHc1JfiNE-Dpv3_Ul1heaKP=s1000",
    "vasai_interior_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEdczd4qlmh2__NwkYbqMLbCqPla0mjmO-r5ISXt3cy6TCIyfApwIswkR0Pmiqhh2MmK3PUdJPhlZd0AFyOdBhbSKIBS4KtUd_OcSamH5Pp-5X6Iu1ZkoX2wid3wolLpY-hs6NDQruXMxQ=s1000",
    "vasai_interior_2.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE1kzlUFTInYBUW-bOibPyIRgON-cBQYE95gduMvKUwsOnzkeXAnI_Gnj6Ex8IiiJIR3ND2OEVQQrmO_q9WZEPhGrWxvC3eO6sr5hn4gwVyDgSl26iIzLTk9r5yN79Csc7bX-r6NchoGTc=s1000"
}

output_dir = "f:/stone oven/public/real_gallery"
os.makedirs(output_dir, exist_ok=True)

for filename, url in images.items():
    print(f"Downloading {filename}...")
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(os.path.join(output_dir, filename), "wb") as f:
                f.write(response.content)
            print(f"Saved {filename}")
        else:
            print(f"Failed to download {filename}: Status {response.status_code}")
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
