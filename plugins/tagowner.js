let handler = async (m, { conn, text }) => {
    let name = ('62895361677059@s.whatsapp.net')
    let panggil = `
    @${name.replace(/@.+/, '')}!!! Ada yang manggil nih:v
    `.trim()
    let mentionedJid = [name]
  conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /Hana-cwan/i
handler.command = new RegExp

module.exports = handler