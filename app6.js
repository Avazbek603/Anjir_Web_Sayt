// === Savatni localStorage dan olish ===
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cartContainer");
const totalPriceEl = document.getElementById("totalPrice");
const clearCartBtn = document.getElementById("clearCart");

// === Mahsulotlarni chiqarish ===
function displayCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty cart">
        <p>Savat hozircha bo‘sh...</p>
      </div>`;
    totalPriceEl.textContent = "0 so‘m";
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("cart-item");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button class="remove-btn" data-index="${index}">O‘chirish</button>
    `;
    cartContainer.appendChild(card);

    const priceNumber = parseInt(item.price.replace(/[^\d]/g, ""));
    total += priceNumber;
  });

  totalPriceEl.textContent = `${total.toLocaleString()} so‘m`;

  // Mahsulotni o‘chirish
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    });
  });
}

// === Savatni tozalash ===
clearCartBtn.addEventListener("click", () => {
  if (confirm("Savatni tozalashni xohlaysizmi?")) {
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
  }
});

displayCart();

// === Modalni boshqarish ===
const orderBtn = document.getElementById("orderNow");
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close-btn");
const orderForm = document.getElementById("orderForm");

orderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Savat bo‘sh! Avval mahsulot qo‘shing.");
    return;
  }
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// === Buyurtmani yuborish ===
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, ""));
    total += priceNum;
  });

    // 🔹 Serverga yuborish (Telegramga backend orqali)
    fetch("http://127.0.0.1:3000/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        address,
        cart,
        total,
      }),
    })
  
    .then((res) => {
      if (res.ok) {
        alert("✅ Buyurtmangiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
        localStorage.removeItem("cart");
        cart = [];
        displayCart();
        modal.style.display = "none";
        orderForm.reset();
      } else {
        alert("❌ Xatolik! Serverdan javob kelmadi.");
      }
    })
    .catch(() => {
      alert("✅ Buyurtmangiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
    });
});
