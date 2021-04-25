const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    await m.reply('Searching...')
    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'infocuaca Bandung', m)

    axios.get(`https://ardi30.herokuapp.com/doc/cuaca?p=${text}`)
        .then((res) => {
          
          let hasil = `*Kota:* ${res.data.hasil.nama}\n*Koordinat:*\n  Lon: ${res.data.hasil.koordinat.lon}\n  Lat: ${res.data.hasil.koordinat.lat}\n*Suhu:* ${res.data.hasil.suhu}\n*Angin:* ${res.data.hasil.angin}\n*Kelembaban:* ${res.data.hasil.kelembaban}\n*Cuaca:* ${res.data.hasil.cuaca}\n*Keterangan:* ${res.data.hasil.keterangan}\n*Angin:* ${res.data.hasil.angin}`
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