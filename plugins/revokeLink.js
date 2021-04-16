let handler = async (m, { conn, args }) => {
  conn.fakeReply(m.chat, 'Link group berhasil di setel ulang', '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, m.chat)
  await conn.revokeInvite(m.chat)
}
handler.help = ['revoke']
handler.tags = ['admin']
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