let handler = async (m, { conn }) => {
  let LastClaim = global.DATABASE._data.users[m.sender].lastclaim
let cdj = `${JaM(new Date - LastClaim)}`
let cdm = `${MeNit(new Date - LastClaim)}`
let cds = `${DeTik(new Date - LastClaim)}`
let cd1 = Math.ceil(23 - cdj)
let cd2 = Math.ceil(59 - cdm)
let cd3 = Math.ceil(60 - cds)
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].uang += 5000
    global.DATABASE._data.users[m.sender].exp += 100
    m.reply('Selamat anda mendapatkan +Rp5000')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply(`Anda sudah mengklaim harian hari ini\n\nTunggu ${cd1} Jam ${cd2} Menit ${cd3} Detik!`)
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

function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 360000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}