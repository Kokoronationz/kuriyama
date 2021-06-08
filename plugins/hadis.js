const axios = require('axios')

let handler = async(m, { conn, text }) => {

    let [hadis, nomor] = text.split('|')
    if (!hadis) throw `Masukkan nama Hadis\n\n❖ Abu Daud\n❖ Ahmad\n❖ Bukhari\n❖ Darimi\n❖ Ibnu Majah\n❖ Nasai\n❖ Malik\n❖ Muslim`
    await m.reply(global.wait)
    new Promise((resolve, reject) => {
        axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/hadith?kitab=${hadis.toLowerCase()}&nomor=${nomor}`)
            .then((res) => {

                let caption = `*「 Hadis 」*\n\n${res.data.result.data.contents.arab}\n\n*Artinya:*\n\"${res.data.result.data.contents.id}\"\n\n${res.data.result.data.name} ${res.data.result.data.contents.number}.`
                conn.reply(m.chat, caption, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['hadis <nama>|<nomor>']
handler.tags = ['islamic']
handler.command = /^(hadis)$/i
handler.register = true

module.exports = handler