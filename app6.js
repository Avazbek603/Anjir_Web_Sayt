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

// === Buyurtma yuborish ===
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  let orderText = `🛒 <b>Yangi buyurtma!</b>\n\n👤 <b>Ism:</b> ${name}\n📞 <b>Telefon:</b> ${phone}\n🏠 <b>Manzil:</b> ${address}\n\n<b>Mahsulotlar:</b>\n`;

  let total = 0;
  cart.forEach((item) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, ""));
    total += priceNum;
    orderText += `• ${item.name} — ${item.price}\n`;
  });

  orderText += `\n💰 <b>Jami:</b> ${total.toLocaleString()} so‘m`;

  // === Telegramga yuborish ===
  const TOKEN = "8119491112:AAEnp06vkAXdY-6kEnRXKbzIFJjZDufznYY";
  const CHAT_ID = "6652899566";

  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: orderText,
      parse_mode: "HTML",
    }),
  })
    .then(() => {
      alert("✅ Buyurtmangiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
      localStorage.removeItem("cart");
      cart = [];
      displayCart();
      modal.style.display = "none";
      orderForm.reset();
    })
    .catch(() => {
      alert("❌ Xatolik! Internet aloqasini tekshiring.");
    });
});
