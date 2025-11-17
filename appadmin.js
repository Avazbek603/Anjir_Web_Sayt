const addBtn = document.getElementById("addBtn");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const imageInput = document.getElementById("image");
const categorySelect = document.getElementById("category");
const statusMsg = document.getElementById("statusMsg");
const container = document.getElementById("productContainer");

// ✏️ Edit modal elementlar
const editModal = document.getElementById("editModal");
const editId = document.getElementById("editId");
const editName = document.getElementById("editName");
const editPrice = document.getElementById("editPrice");
const editImage = document.getElementById("editImage");
const editCategory = document.getElementById("editCategory");
const saveEditBtn = document.getElementById("saveEditBtn");
const closeEditBtn = document.getElementById("closeEditBtn");

const API_URL = "http://localhost:3000/api/products";

// 🟢 Mahsulotlarni chiqarish
async function loadProducts() {
  const res = await fetch(API_URL);
  const products = await res.json();

  container.innerHTML = "";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <small>${p.category}</small><br>

      <button class="edit-btn" data-id="${p.id}">✏️ Tahrirlash</button>
      <button class="delete-btn" data-id="${p.id}">🗑 O‘chirish</button>
    `;

    container.appendChild(card);
  });

  // 🗑 O‘chirish tugmalari
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = Number(e.target.dataset.id);

      await fetch(`${API_URL}/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      loadProducts();
    });
  });

  // ✏️ Tahrirlash tugmalari
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = Number(e.target.dataset.id);

      // 🔎 Mahsulotni topish
      const res = await fetch(API_URL);
      const products = await res.json();
      const product = products.find((p) => Number(p.id) === id);

      if (!product) {
        alert("Mahsulot topilmadi!");
        return;
      }

      // Modalga ma'lumotlarni joylash
      editId.value = product.id;
      editName.value = product.name;
      editPrice.value = product.price;
      editImage.value = product.image;
      editCategory.value = product.category;

      editModal.style.display = "block";
    });
  });
}

// 💾 Tahrirni saqlash
saveEditBtn.addEventListener("click", async () => {
  const updateData = {
    id: Number(editId.value),
    name: editName.value.trim(),
    price: editPrice.value.trim(),
    image: editImage.value.trim(),
    category: editCategory.value,
  };

  const res = await fetch(`${API_URL}/edit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });

  const data = await res.json();

  if (data.success) {
    alert("Mahsulot yangilandi!");
    editModal.style.display = "none";
    loadProducts();
  } else {
    alert("Xatolik: " + data.error);
  }
});

// ❌ Modalni yopish
closeEditBtn.addEventListener("click", () => {
  editModal.style.display = "none";
});

// 🚀 Dastlab yuklash
loadProducts();
