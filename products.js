// ぺんてぃグッズの一覧
// 新しい商品を出したら、下の [ ] の中に { ... } を1つ追加してください。
//
//   name     : 商品名
//   shop     : "BOOTH" か "SUZURI"
//   price    : 価格（税込・数字のみ）
//   image    : 画像ファイル（images フォルダに入れて "images/ファイル名" と書く）
//   url      : 販売ページのURL
//   category : 種類（アクリル、ステッカー、Tシャツ など自由に）
//   note     : 補足（省略可。サイズ違いなどをカードに小さく表示）
//
// サイズなどで価格が複数あるときは price: [1000, 1200] のように並べると
// 「¥1,000〜」と一番安い価格で表示されます。
// price が分からないときは null にすると「価格はショップで確認」と表示されます。

const PRODUCTS = [
  {
    name: "ぺんてぃ アクリルキーホルダー(ノーマル)",
    shop: "BOOTH",
    price: [1000, 1200, 1600],
    note: "サイズ：50mm / 70mm / 100mm",
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
  {
    name: "ぺんてぃ キャップ P氷ロゴ",
    shop: "BOOTH",
    price: 3000,
    image: "images/cap-p-ice-logo.webp",
    url: "https://comacraft.booth.pm/items/8919022",
    category: "キャップ",
  },
];
