const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const express = require("express");
const app = express();
require('dotenv').config();
app.get("/", (req, res) => {
    res.send("Bot is alive");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const userInput = msg.text;
    const msg_id = msg.message_id;

    await bot.sendMessage(chatId, userInput, {
        reply_to_message_id: msg_id,
    });

});

module.exports = app;