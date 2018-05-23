const TelegramBot = require('node-telegram-bot-api');
const token = '519970076:AAEDzWGPuzBKWWYnv_B2f4h2BFklaqiES8o';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.from.id;

// send back the matched "whatever" to the chat
bot.sendMessage(chatId, 'https://hangouts.google.com/call/npvpswx7bvdgdbewycgf6lmnfqe?no_rd');
});