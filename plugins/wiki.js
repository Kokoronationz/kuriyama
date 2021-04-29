  const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    await m.reply('Searching...')
    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'wikipedia bot', m)

    let hasil = await axios.get(`https://videfikri.com/api/wiki/?query=` + text)
        
            conn.reply(m.chat, `${hasil.isi_konten}`, m)

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
