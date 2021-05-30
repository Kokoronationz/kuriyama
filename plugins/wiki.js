  const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'wikipedia bot', m)
    await m.reply(global.wait)
    axios.get(`https://videfikri.com/api/wiki/?query=` + text)
        .then((res) => {
          let hasil = `*• Wikipedia ${res.data.result.judul}:*\n\n${res.data.result.isi_konten}`
            conn.reply(m.chat, hasil, m)
        })
        .catch()
}
handler.help = ['wiki <query>','wikipedia <query>']
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
