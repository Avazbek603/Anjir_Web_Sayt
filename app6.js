// Savatni localStorage dan olish
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cartContainer");
const totalPriceEl = document.getElementById("totalPrice");
const clearCartBtn = document.getElementById("clearCart");

// Mahsulotlarni chiqarish
function displayCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="empty">Savat hozircha bo‘sh...</p>`;
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

    // Narxni hisoblash (raqam ajratib olish)
    const priceNumber = parseInt(item.price.replace(/[^\d]/g, ""));
    total += priceNumber;
  });

  totalPriceEl.textContent = `${total.toLocaleString()} so‘m`;

  // O‘chirish tugmalari
  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    });
  });
}

// Savatni tozalash
clearCartBtn.addEventListener("click", () => {
  if (confirm("Savatni tozalashni xohlaysizmi?")) {
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
  }
});

displayCart();
window.scrollTo({ top: 0, behavior: "smooth" });
// === Buyurtma berish modal ===
const orderBtn = document.getElementById("orderNow");
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close-btn");
const orderForm = document.getElementById("orderForm");

// Modalni ochish
orderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Savat bo‘sh! Avval mahsulot qo‘shing.");
    return;
  }
  modal.style.display = "flex";
});

// Modalni yopish
closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Buyurtma yuborish
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  // Hozircha faqat konsolga chiqaramiz
  console.log("Buyurtma berildi:", { name, phone, address, cart });
  alert("✅ Buyurtmangiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.");

  // Tozalash
  localStorage.removeItem("cart");
  cart = [];
  displayCart();
  modal.style.display = "none";
});
