const API_URL = "http://localhost:3000/api/products";

const addBtn = document.getElementById("addBtn");
const container = document.getElementById("productContainer");

// 🟢 MAHSULOTLARNI CHIQARISH
async function loadProducts() {
  const res = await fetch(API_URL);
  const products = await res.json();

  container.innerHTML = "";
  products.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <small>${p.category}</small><br>
        <button onclick="editProduct(${p.id})">✏️</button>
        <button onclick="deleteProduct(${p.id})">🗑</button>
      </div>
    `;
  });
}

// ➕ QO‘SHISH
addBtn.onclick = async () => {
  const body = {
    name: name.value,
    price: price.value,
    image: image.value,
    category: category.value,
  };

  await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  loadProducts();
};

// ❌ O‘CHIRISH
async function deleteProduct(id) {
  await fetch(`${API_URL}/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

  loadProducts();
}

// ✏️ TAHRIRLASH (oddiy prompt bilan)
async function editProduct(id) {
  const name = prompt("Yangi nom:");
  const price = prompt("Yangi narx:");
  const image = prompt("Yangi rasm URL:");
  const category = prompt("Yangi kategoriya:");

  await fetch(`${API_URL}/edit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, name, price, image, category }),
  });

  loadProducts();
}

loadProducts();
