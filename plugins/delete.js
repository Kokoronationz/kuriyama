let handler = function (m) {
  if (!m.quoted) throw 'Reply pesan bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Hanya bisa menghapus pesan dariku'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['delete']
handler.tags = ['info']

handler.command = /^d(el|elete)?$/i
handler.group = true
handler.register = true

module.exports = handler
