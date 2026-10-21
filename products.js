// ぺんてぃグッズの一覧
// 新しい商品を出したら、下の [ ] の中に { ... } を1つ追加してください。
//
//   name     : 商品名
//   shop     : "BOOTH" か "SUZURI"
//   price    : 価格（税込・数字のみ）
//   image    : 画像ファイル（images フォルダに入れて "images/ファイル名" と書く）
//   url      : 販売ページのURL
//   category : 種類（アクリル、ステッカー、Tシャツ など自由に）
//
// price が分からないときは null にすると「価格はショップで確認」と表示されます。

const PRODUCTS = [
  {
    name: "ぺんてぃ アクリルキーホルダー",
    shop: "BOOTH",
    price: null,
    image: "images/acrylic-keychain.webp",
    url: "https://comacraft.booth.pm/items/8971860",
    category: "アクリル",
  },
  {
    name: "ぺんてぃ めじるしチャーム(ノーマル)",
    shop: "BOOTH",
    price: 700,
    image: "images/mejirushi-charm-normal.webp",
    url: "https://comacraft.booth.pm/items/9022951",
    category: "めじるしチャーム",
  },
];
