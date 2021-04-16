let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmining > 86400000) {
    global.DATABASE._data.users[m.sender].uang += 10000
    global.DATABASE._data.users[m.sender].exp += 100
    m.reply('Selamat anda mendapatkan +Rp10000')
    global.DATABASE._data.users[m.sender].lastmining = new Date * 1
  } else m.reply('Tunggu 1 Jam lagi')
}
handler.help = ['mining']
handler.tags = ['xp']
handler.command = /^mining$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false
handler.limit = true