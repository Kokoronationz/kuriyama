const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    await m.reply('Searching...')
    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'infocuaca Bandung', m)

    axios.get(`https://ardi30.herokuapp.com/doc/cuaca?p=${text}`)
        .then((res) => {
          let ress = res.data.hasil
          
          let hasil = `*Kota:* ${text}\n*Koordinat:*\n  Lon: ${ress.koordinat.lon}\n  Lat: ${ress.koordinat.lat}\n*Suhu:* ${ress.suhu}\n*Angin:* ${ress.angin}\n*Kelembaban:* ${ress.kelembaban}\n*Cuaca:* ${res.cuaca}\n*Keterangan:* ${ress.keterangan}\n*Angin:* ${ress.angin}`
            conn.reply(m.chat, hasil, m)
        })
        .catch()
}
handler.help = ['infocuaca <kota>']
handler.tags = ['internet']
handler.command = /^(infocuaca|cuaca)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 1
handler.limit = false

module.exports = handler