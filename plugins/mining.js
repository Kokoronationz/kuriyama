let handler = async function(m, { conn, text }) {

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  this.fakeReply(m.chat, `Selamat Anda Mendapatkan\n+Rp5000!`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, m.chat)
  await time(60000)
}
handler.help = ['mining']
handler.tags = ['']
handler.command = /^mining/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.uang = 5000

module.exports = handler
