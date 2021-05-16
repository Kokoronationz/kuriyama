let axios = require("axios");
let handler = async(m, { conn, text }) => {
try {
    if (!text) return conn.reply(m.chat, '_Sil ahkan Masukan Teks!_', m)
    if (text.length > 10) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 10 huruf!_', m)
    await m.reply(global.wait)
    let link = 'https://lindow-api.herokuapp.com/api/pinterest?search=' + text;
    conn.sendFile(m.chat, link, 'pin.png', '*©Kuriyama-bot*', m)
  } catch (e) {
   m.reply('```Error```')
  }
} 

handler.help = ['pinterest <query>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
