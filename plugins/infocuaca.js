const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    await m.reply('Searching...')
    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'infocuaca Bandung', m)

    axios.get(`https://ardi30.herokuapp.com/doc/cuaca`)
        .then((res) => {
          let hasil = res.data.hasil.map(res=>`*Kota:* ${res.nama}\n*Koordinat:*\n  Lon: ${res.koordinat.lon}\n  Lat: ${res.koordinat.lat}\n*Suhu:* ${res.suhu}\n*Angin:* ${res.angin}\n*Kelembaban:* ${res.kelembaban}\n*Cuaca:* ${res.cuaca}\n*Keterangan:* ${res.keterangan}\n*Angin:* ${res.angin}`)
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