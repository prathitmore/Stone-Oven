import os
import requests

images = {
    # Virar Ambiance
    "virar_ambience_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHDjolczjpTdc3sLFJOsR8qzH0E3Omr0tXrrEtshsMcPGMWQAdUISBucozLRTNYFIeQizZ8qJe3zaVd_3mIbShTX9XINzqF9WFZmOA31KLcZTguPSnd_oMSJmoaQaVxDceFqNNi=s1000",
    "virar_ambience_2.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGWHyO080y4-x4IqpRbK7SBIV8HpfKVe2PjdKx10uTE_4EWrQvU1fELrIfgpPGH4ZHcpIqJcctdUbQAYDI9zRtEi5KbUPEEcAGkfdJL2z9RsRJTdae_ufPtXeVrpsJB_DnMm6hN=s1000",
    "virar_ambience_3.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEnS4QqMYcUuWJizR478gRaOkbAfSoyotH-41gk2kcnnGDOib4zDI9oDmxL-QyBR2FZnoFxotFmn0dHN0Td63eKpPOVwX6KaobGfDbZnyowfMaGBzRDRVejk1L1LHAOwzIQBik=s1000",
    "virar_ambience_4.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGVBHHghXYWR7-5Dutbtc4u5im4CIaAFqPAnErB6izODP5hg0NDbiM0UGOgg2ynca7SGiXtiKPllK5R6BsehMP05xc6oGtsOHCZFM0EZMwwzm7mS4bPODhYBWD_0vndrtNGlb7ni41e40BA=s1000",
    "virar_ambience_5.jpg": "https://lh3.googleusercontent.com/p/AF1QipMT3yK1_7e1_f_N_U_o_i_S_P_X_V_v_n_T_i_X_v_o=s1000",
    
    # Vasai Ambiance
    "vasai_ambience_1.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE1kzlUFTInYBUW-bOibPyIRgON-cBQYE95gduMvKUwsOnzkeXAnI_Gnj6Ex8IiiJIR3ND2OEVQQrmO_q9WZEPhGrWxvC3eO6sr5hn4gwVyDgSl26iIzLTk9r5yN79Csc7bX-r6NchoGTc=s1000",
    "vasai_ambience_2.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGUAECYovoE6UYT4fV6ce_91qxbLm4Ptm2VkTVmgsSUG1EMCN-eTbGFwjSXE3veg78inG7-_ZzKxsG6932q4TNweoDFbG_reCHCzy1bZICT21NZ-GLe_L4itPIG-62PvcPtBjuu=s1000",
    "vasai_ambience_3.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgpnqS-stw4WBEd35vKPB7BMI82YT9mAtVZ7PBKptpdUNjRu_gvbxzdNAeSNWkeURNnWVbXpGrcytYwRos2h8GX-3SyFteTf1ElBPrPE1JulQvCyYYjP2QpQ42Ni9eVlmkxcm4=s1000",
    "vasai_ambience_4.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFTxqNXAZlfA3xgXFj6bEZUTvp3UhqeJofkRRjzJQ52qiKxReqkMe2-6IO6atlEEitrdvHkKZZUUYDlrRpjZ3pLwzK7hnGKdM-87lnP6ToYDkg-cNug5D96326zF2gxR5xdUOne_A=s1000",
    "vasai_ambience_5.jpg": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE3liP1aPf9OGY-0ELg0xFd17h-XC6Brail_vi3IH5iwsKollTre4pBez2a6NLq8wyQXejcE4Vs3OmHoLjXHVsoIrmiSboLAQ1WsC_M12g8pkmE2_IoexmRfS4uLhRPOD4xJA_3=s1000"
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
