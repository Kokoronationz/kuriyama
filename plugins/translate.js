const translate = require('translate-google-api')

let handler = async (m, { text, usedPrefix }) => {
    bales = `contoh: \n${usedPrefix}tr kode bahasa|teks\n${usedPrefix}tr id|thankyou\n\nBahasa yang didukung: https://cloud.google.com/translate/docs/language`
    if (!text) throw bales

    let [to, trans] = text.split`|`

    if (!to) throw `Silahkan masukan kode bahasa\ncontoh: \n\n${usedPrefix}tr id|thankyou\n\nBahasa yang didukung: https://cloud.google.com/translate/docs/language`
    if (!trans) throw `Silahkan masukan kalimat yang ingin diterjemahkan\ncontoh: \n\n${usedPrefix}tr id|thankyou`

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(`Pesan: ${trans}\n\nTerjemahan: ${result[0]}`)
        console.log(result[0])
    } catch (e) {
        throw bales
    }

}
handler.help = ['translate'].map(v => v + ' <to>|<teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

