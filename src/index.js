const TelegramBot = require('node-telegram-bot-api');
const token = '519970076:AAEDzWGPuzBKWWYnv_B2f4h2BFklaqiES8o';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    const id = msg.from.id;
    bot.sendMessage(id, msg.text);
});