let handler = async (m, { conn, args }) => {
  
  await conn.revokeInvite()
}
handler.help = ['revoke']
handler.tags = ['']
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