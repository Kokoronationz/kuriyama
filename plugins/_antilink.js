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
    m.reply(pesan, m, { contextInfo: { mentionedJid: mimin }})
    const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    if (warn < 2) {
    m.reply('Kamu telah diperingatkan oleh admin, dan sekarang kamu punya ' + (warn + 1) + ' warn . Ingat Jika kamu mendapat warn 3 kali kamu akan otomatis ditendang dari Grup', m.sender)
    global.DATABASE._data.users[m.sender].warn += 1
    } else if (warn == 2) {
            //global.DATABASE._data.users[ban].banned = true
            global.DATABASE._data.users[ban].warn = 0
            conn.fakeReply(m.chat, 'Selamat Jalan Kawan', '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, 'status@broadcast')
                await time(5000)
             await conn.groupRemove(m.chat, [ban])
             m.reply('*Kamu dikick karena telah mendapat 3 kali warn*', ban)
        }
    if (global.opts['restrict']) {
      if (isAdmin || !isBotAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler