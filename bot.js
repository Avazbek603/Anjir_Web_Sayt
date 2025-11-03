const TelegramBot = require("node-telegram-bot-api");

// 🔐 BotFather bergan tokenni shu yerga yozing
const token = "8119491112:AAEnp06vkAXdY-6kEnRXKbzIFJjZDufznYY";

// Botni yaratamiz
const bot = new TelegramBot(token, { polling: true });

// Buyurtma kelganda uni qabul qilamiz
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "👋 Salom! Bu Anjir Supermarket buyurtma botidir.");
});

// Web-saytdan buyurtma kelganda uni ko‘rsatish
bot.on("message", (msg) => {
  console.log(msg);
});
