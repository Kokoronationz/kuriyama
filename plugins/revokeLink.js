let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
  conn.updatePresence(m.chat, Presence.composing) 
  await conn.revokeInvite(m.chat)
}
handler.help = ['revoke']
handler.tags = ['maintenance']
handler.command = /^revoke$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler