let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts['62895361677059@s.whatsapp.net']

  conn.reply(m.chat, `
${name}!!! Ada Yang manggil nih:v
`.trim(), m)
    let mentionedJid = [name]
}
handler.customPrefix = /Hana-cwan/i
handler.command = new RegExp

module.exports = handler