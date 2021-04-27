let handler = async (m, { conn, text }) => {
    //let member = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
    let name = ('62895361677059@s.whatsapp.net')
    let panggil = `
    @${name.replace(/@.+/, '')}!!! Ada Yang manggil nih:v
    `.trim()
    let mentionedJid = [name]
  conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /Hana-cwan/i
handler.command = new RegExp

module.exports = handler