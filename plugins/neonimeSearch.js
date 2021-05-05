  const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'neonime naruto', m)
    await m.reply(global.wait)
    axios.get(`https://docs-jojo.herokuapp.com/api/neonime_search?q=` + text)
        .then((res) => {
          let hasil = res.data.result.map(res=>`*Judul:* ${res.title}\n*Link:* ${res.url}\n*Deskripsi:* ${res.desc}`.join   ('\n\n━ ┅ ━━━━━━━━━━━━━━━ ┅ ━\n\n')
            m.reply(m.chat, hasil, m)
        })
        .catch()
}
handler.help = ['neonime']
handler.tags = ['weebs']
handler.command = /^(neonime)$/i
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
