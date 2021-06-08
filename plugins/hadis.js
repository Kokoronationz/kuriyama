const axios = require('axios')

let handler = async(m, { conn, args, text }) => {

    let nomor = text
    if (args.length == 0) throw `Masukkan nama Hadis\n\n❖ Abu Daud\n❖ Ahmad\n❖ Bukhari\n❖ Darimi\n❖ Ibnu Majah\n❖ Nasai\n❖ Malik\n❖ Muslim`
    if (args[0] == 'abu daud' || args[0] == 'ahmad' || args[0] == 'bukhari' || args[0] == 'Darimi'|| args[0] == 'ibnu majah'|| args[0] == 'nasai'|| args[0] == 'malik'|| args[0] == 'muslim')
    await m.reply(global.wait)
    new Promise((resolve, reject) => {
        axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/hadith?kitab=${args[0]}&nomor=${nomor}`)
            .then((res) => {

                let caption = `*「 Hadis 」*\n\n${res.data.result.data.contents.arab}\n"${res.data.result.data.contents.id}"\n\n${res.data.result.data.name} ${res.data.result.data.contents.number}.`
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