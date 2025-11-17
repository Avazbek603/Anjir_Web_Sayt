const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

// 🔐 Telegram ma'lumotlari
const TOKEN = "8119491112:AAEnp06vkAXdY-6kEnRXKbzIFJjZDufznYY";
const CHAT_ID = "6652899566";

// 🔧 Middleware
app.use(cors());
app.use(bodyParser.json());

// 🗂 Fayllar mavjud bo‘lishi kerak
if (!fs.existsSync("orders.json")) fs.writeFileSync("orders.json", "[]", "utf-8");
if (!fs.existsSync("products.json")) fs.writeFileSync("products.json", "[]", "utf-8");

// ======================================================
// 🧾 BUYURTMALAR
// ======================================================

// 🛒 Buyurtma yuborish
app.post("/api/order", async (req, res) => {
  const { name, phone, address, cart, total } = req.body;

  // Validatsiya
  if (!name || !phone || !address || !cart || cart.length === 0) {
    return res.status(400).json({ error: "Ma'lumotlar to‘liq emas" });
  }

  const order = {
    id: Date.now(),
    name,
    phone,
    address,
    cart,
    total,
    status: "Yangi",
    date: new Date().toLocaleString("uz-UZ"),
  };

  const orders = JSON.parse(fs.readFileSync("orders.json", "utf-8"));
  orders.push(order);
  fs.writeFileSync("orders.json", JSON.stringify(orders, null, 2), "utf-8");

  // Telegramga yuborish
  let text = `🛒 <b>Yangi buyurtma!</b>\n\n`;
  text += `👤 <b>Ism:</b> ${name}\n`;
  text += `📞 <b>Telefon:</b> ${phone}\n`;
  text += `🏠 <b>Manzil:</b> ${address}\n\n`;
  text += `<b>Mahsulotlar:</b>\n`;
  cart.forEach((item) => {
    text += `• ${item.name} — ${item.price}\n`;
  });
  text += `\n💰 <b>Jami:</b> ${total.toLocaleString()} so‘m`;

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Telegram xatosi:", error);
    res.status(500).json({ error: "Telegramga yuborilmadi" });
  }
});

// 🔹 Buyurtmalarni olish
app.get("/api/orders", (req, res) => {
  const orders = JSON.parse(fs.readFileSync("orders.json", "utf-8"));
  res.json(orders);
});

// 🔹 Buyurtma holatini yangilash
app.post("/api/orders/update", (req, res) => {
  const { id, status } = req.body;

  const orders = JSON.parse(fs.readFileSync("orders.json", "utf-8"));
  const index = orders.findIndex((o) => o.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Buyurtma topilmadi" });
  }

  orders[index].status = status;
  fs.writeFileSync("orders.json", JSON.stringify(orders, null, 2), "utf-8");

  res.json({ success: true });
});

// ======================================================
// 🛍 MAHSULOTLAR
// ======================================================

// 🔹 Barcha mahsulotlarni olish
app.get("/api/products", (req, res) => {
  const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  res.json(products);
});

// ➕ Yangi mahsulot qo‘shish
app.post("/api/products/add", (req, res) => {
  const { name, price, image, category } = req.body;

  if (!name || !price || !image || !category)
    return res.status(400).json({ error: "Ma'lumotlar to‘liq emas" });

  const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  const newProduct = {
    id: Date.now(),
    name,
    price,
    image,
    category,
  };

  products.push(newProduct);

  fs.writeFileSync("products.json", JSON.stringify(products, null, 2), "utf-8");

  res.json({ success: true, product: newProduct });
});

// ❌ Mahsulotni o‘chirish
app.post("/api/products/delete", (req, res) => {
  const { id } = req.body;

  const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  const updated = products.filter((p) => p.id !== id);

  fs.writeFileSync("products.json", JSON.stringify(updated, null, 2), "utf-8");

  res.json({ success: true });
});

// ✏️ Mahsulotni tahrirlash
app.post("/api/products/edit", (req, res) => {
  let { id, name, price, image, category } = req.body;

  id = Number(id); // 👉 ID ni numberga aylantirish

  const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

  // 👉 ID larni numberga aylantirib solishtiramiz
  const index = products.findIndex((p) => Number(p.id) === id);

  if (index === -1) {
    return res.status(404).json({ error: "Mahsulot topilmadi" });
  }

  // 🔄 Ma’lumotlarni yangilash
  products[index].name = name;
  products[index].price = price;
  products[index].image = image;
  products[index].category = category;

  fs.writeFileSync("products.json", JSON.stringify(products, null, 2), "utf-8");

  res.json({ success: true, product: products[index] });
});

// ======================================================
// 🚀 SERVERNI ISHGA TUSHIRISH
// ======================================================
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT}-portda ishga tushdi!`);
});
