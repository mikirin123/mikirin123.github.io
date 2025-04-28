import os
import json

# 画像が入っているフォルダのパス
IMAGE_FOLDER = 'image'
# 出力するJSONファイルの名前
OUTPUT_FILE = 'image_list.json'

def generate_image_list():
    # imageフォルダの中身を取得
    files = os.listdir(IMAGE_FOLDER)
    
    # 拡張子で画像ファイルだけを抽出
    images = [f for f in files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp'))]
    
    # JSONとして保存
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(images, f, ensure_ascii=False, indent=4)
    
    print(f"{len(images)} 個の画像を {OUTPUT_FILE} に保存しました！")

if __name__ == '__main__':
    generate_image_list()
