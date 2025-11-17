// Tanlangan katalog nomini olish
const category = localStorage.getItem("selectedCategory");
const categoryTitle = document.getElementById("categoryTitle");
const productList = document.getElementById("productList");

categoryTitle.textContent = category ? category : "Barcha mahsulotlar";

async function loadProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  // Agar kategoriya tanlangan bo‘lsa — faqat o‘sha bo‘limni ko‘rsatamiz
  const filtered = category && category !== "Barchasi"
    ? products.filter(p => p.category === category)
    : products;

  if (filtered.length === 0) {
    productList.innerHTML = `<p class="text-center text-muted">📭 Bu bo‘limda hozircha mahsulot yo‘q.</p>`;
    return;
  }

  productList.innerHTML = filtered.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <button class="add-btn" onclick='addToCart(${JSON.stringify(p)})'>Savatga</button>
    </div>
  `).join("");
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("🛒 Mahsulot savatga qo‘shildi!");
}

loadProducts();
