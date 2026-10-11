# ぺんてぃグッズ

BOOTH・SUZURIで販売中のぺんてぃグッズをまとめたサイトです。

## 商品の追加方法

1. 商品画像を `images/` フォルダに入れる（正方形がきれいに表示されます）
2. `products.js` を開き、`PRODUCTS` の中に次のような1件を追加する

```js
{
  name: "ぺんてぃ ステッカー",
  shop: "BOOTH",          // "BOOTH" または "SUZURI"
  price: 400,
  image: "images/sticker.png",
  url: "https://comacraft.booth.pm/items/xxxxxxx",
  category: "ステッカー",
},
```

3. 保存してコミット・プッシュすると、GitHub Pagesに反映されます（数分かかります）

## 公開方法（GitHub Pages）

リポジトリの Settings → Pages → Source を「Deploy from a branch」、Branch を `main` / `(root)` にして保存してください。
