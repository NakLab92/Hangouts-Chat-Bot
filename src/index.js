const TelegramBot = require('node-telegram-bot-api');
const token = '566558605:AAFmS8-lMljZm_wyLhEttpw-QspD-mJles0';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/new/, (msg) => {
    const chatId = msg.from.id;
bot.sendMessage(chatId, 'https://hangouts.google.com/call/');
});

bot.onText(/\/old/, (msg) => {
    const chatId = msg.from.id;
bot.sendMessage(chatId, 'https://hangouts.google.com/call/npvpswx7bvdgdbewycgf6lmnfqe?no_rd');
});