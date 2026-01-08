const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// 🔐 Telegram (ENV orqali — XAVFSIZ)
const TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// 🔧 Middleware
app.use(cors());
app.use(express.json());

// 🟢 ASOSIY SAHIFA (Cannot GET / ni tuzatadi)
app.get("/", (req, res) => {
  res.send("🟢 Anjir Web Sayti ishlayapti!");
});

// 🗂 JSON fayllar
if (!fs.existsSync("orders.json")) fs.writeFileSync("orders.json", "[]");
if (!fs.existsSync("products.json")) fs.writeFileSync("products.json", "[]");

// ======================================================
// 🧾 BUYURTMALAR
// ======================================================

app.post("/api/order", async (req, res) => {
  const { name, phone, address, cart, total } = req.body;

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

  const orders = JSON.parse(fs.readFileSync("orders.json"));
  orders.push(order);
  fs.writeFileSync("orders.json", JSON.stringify(orders, null, 2));

  let text = `🛒 <b>Yangi buyurtma!</b>\n\n`;
  text += `👤 <b>Ism:</b> ${name}\n`;
  text += `📞 <b>Telefon:</b> ${phone}\n`;
  text += `🏠 <b>Manzil:</b> ${address}\n\n`;
  text += `<b>Mahsulotlar:</b>\n`;
  cart.forEach(i => text += `• ${i.name} — ${i.price}\n`);
  text += `\n💰 <b>Jami:</b> ${total.toLocaleString()} so‘m`;

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML"
      }),
    });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: "Telegram xatosi" });
  }
});

// ======================================================
// 🛍 MAHSULOTLAR
// ======================================================

app.get("/api/products", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("products.json")));
});

app.post("/api/products/add", (req, res) => {
  const { name, price, image, category } = req.body;
  if (!name || !price || !image || !category)
    return res.json({ success: false });

  const products = JSON.parse(fs.readFileSync("products.json"));
  products.push({ id: Date.now(), name, price, image, category });
  fs.writeFileSync("products.json", JSON.stringify(products, null, 2));

  res.json({ success: true });
});

app.post("/api/products/edit", (req, res) => {
  const { id, name, price, image, category } = req.body;
  const products = JSON.parse(fs.readFileSync("products.json"));
  const index = products.findIndex(p => Number(p.id) === Number(id));

  if (index === -1) return res.json({ success: false });

  products[index] = { id, name, price, image, category };
  fs.writeFileSync("products.json", JSON.stringify(products, null, 2));

  res.json({ success: true });
});

app.post("/api/products/delete", (req, res) => {
  const { id } = req.body;
  const products = JSON.parse(fs.readFileSync("products.json"))
    .filter(p => Number(p.id) !== Number(id));

  fs.writeFileSync("products.json", JSON.stringify(products, null, 2));
  res.json({ success: true });
});

// ======================================================
// 🚀 SERVER
// ======================================================

app.listen(PORT, () => {
  console.log("🚀 Server ishlayapti:", PORT);
});
