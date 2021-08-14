let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*「 KODE NUKLIR 」*

*「 TOBAT WOE 」*
`.trim(), m)
}
handler.help = ['kodenuklir']
handler.tags = ['nsfw']
handler.command = /^(kodenuklir)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

