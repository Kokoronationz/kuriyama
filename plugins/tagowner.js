let handler = async (m, { conn, text }) => {
    let name = ['62895361677059@s.whatsapp.net']

  conn.reply(m.chat, `
@${name.replace(/@.+/, '')}!!! Ada Yang manggil nih:v
`.trim(), m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /Hana-cwan/i
handler.command = new RegExp

module.exports = handler