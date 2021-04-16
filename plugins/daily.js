let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].uang += 5000
    global.DATABASE._data.users[m.sender].exp += 100
    m.reply('Selamat anda mendapatkan +Rp5000')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Anda sudah mengklaim harian hari ini')
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

