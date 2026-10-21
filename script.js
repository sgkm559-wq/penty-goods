const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const filters = document.querySelectorAll(".filter");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function card(item) {
  const li = el("li", "card");
  const link = el("a", "card-link");
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener";

  const thumb = el("div", "thumb");
  if (item.image) {
    const img = el("img");
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy";
    thumb.append(img);
  } else {
    thumb.append(el("span", "no-image", "No Image"));
  }

  const body = el("div", "card-body");
  const meta = el("div", "meta");
  meta.append(el("span", "badge badge-" + item.shop.toLowerCase(), item.shop));
  if (item.category) meta.append(el("span", "category", item.category));
  body.append(
    meta,
    el("h2", "name", item.name),
    item.price == null
      ? el("p", "price price-unknown", "価格はショップで確認")
      : el("p", "price", "¥" + Number(item.price).toLocaleString("ja-JP"))
  );

  link.append(thumb, body);
  li.append(link);
  return li;
}

function render(shop) {
  const items = PRODUCTS.filter((p) => shop === "ALL" || p.shop === shop);
  grid.replaceChildren(...items.map(card));
  empty.hidden = items.length > 0;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((b) => b.classList.toggle("is-active", b === button));
    render(button.dataset.shop);
  });
});

render("ALL");
