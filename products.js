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
  {
    name: "ぺんてぃ めじるしチャーム オーロラ貝殻",
    shop: "BOOTH",
    price: 1000,
    note: "カラー：青 / 黄",
    image: "images/mejirushi-charm-aurora-shell.webp",
    url: "https://comacraft.booth.pm/items/8917183",
    category: "めじるしチャーム",
  },
  {
    name: "ぺんてぃ(ハートまみれ) モバイルバッテリー",
    shop: "BOOTH",
    price: 5000,
    image: "images/mobile-battery-hearts.webp",
    url: "https://comacraft.booth.pm/items/8913128",
    category: "モバイルバッテリー",
  },
  {
    name: "ぺんてぃエンブレムパターン タオルハンカチ",
    shop: "SUZURI",
    price: [1695, 1905, 2115],
    note: "サイズ：S / M / L",
    image: "images/towel-handkerchief-emblem.png",
    url: "https://suzuri.jp/comacraft/21071554/towel-handkerchief/l/white",
    category: "タオルハンカチ",
  },
  {
    name: "ぺんてぃエンブレムパターン バンダナ",
    shop: "SUZURI",
    price: 2860,
    image: "images/bandana-emblem.png",
    url: "https://suzuri.jp/comacraft/21071554/bandana/m/white",
    category: "バンダナ",
  },
  {
    name: "ぺんてぃトースト タオルハンカチ",
    shop: "SUZURI",
    price: [1695, 1905, 2115],
    note: "サイズ：S / M / L",
    image: "images/towel-handkerchief-toast.png",
    url: "https://suzuri.jp/comacraft/21071211/towel-handkerchief/m/white",
    category: "タオルハンカチ",
  },
  {
    name: "ぺんてぃカレンダー2027 卓上カレンダー",
    shop: "SUZURI",
    price: 2039,
    image: "images/desk-calendar-2027.png",
    url: "https://suzuri.jp/comacraft/21064058/desk-calendar/2027/white",
    category: "カレンダー",
  },
  {
    name: "ぺんてぃ P氷ロゴ マグカップ",
    shop: "SUZURI",
    price: 2376,
    image: "images/mug-p-ice-logo.png",
    url: "https://suzuri.jp/comacraft/21051946/mug/m/white",
    category: "マグカップ",
  },
  {
    name: "ぺんてぃ P氷ロゴ アクリルキーホルダー",
    shop: "SUZURI",
    price: 1564,
    image: "images/acrylic-keychain-p-ice-logo.png",
    url: "https://suzuri.jp/comacraft/21051946/acrylic-keychain/50x50mm/clear",
    category: "アクリル",
  },
  {
    name: "ぺんてぃ P氷ロゴ ステッカー",
    shop: "SUZURI",
    price: 842,
    image: "images/sticker-p-ice-logo.webp",
    url: "https://suzuri.jp/comacraft/21051946/sticker/m/white",
    category: "ステッカー",
  },
];
