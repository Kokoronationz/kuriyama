let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin, conn, participants }) {
  const NgeriAtmin = (participants) => {
        atminn = []
  }
        let mimin = m.isGroup ? NgeriAtmin(participants) : ''
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    let pesan = 'Hapus!!\n\nLink Grup terdeteksi'
    conn.reply(m.chat, pesan, m, { contextInfo: { mentionedJid: mimin }})
    global.DATABASE._data.users[m.sender].warn += 1
    if (global.opts['restrict']) {
      if (isAdmin || !isBotAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler