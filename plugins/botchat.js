let handler = m => m.reply('Hai, aku disini\n\nAda yang bisa aku bantu?')

handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler