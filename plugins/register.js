const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  
  let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar <nama>|<umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  if (!numb.age < 14) throw 'Maaf, Anda tidak bisa Mendaftar'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*「 Daftar Berhasil! 」*

┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ *Info*
┃
┃ Nama: ${name}
┃ Umur: ${age} tahun
┃ Gift: Rp10000
┃ Total Register: ${rtotalreg}
┃ SN: ${sn}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━


 _Simpan Serial Number anda!_
`.trim())
global.DATABASE._data.users[m.sender].uang += 10000
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>|<umur>')
handler.tags = ['main']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

