let handler = async m => m.reply(`
*「 Premium 」*

┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Mau jadi Premium?
┃ 
┃ Harga Premium
┃ 10k/Bulan
┃ 20k/3 Bulan
┃ 50k/Tahun
┃ 100k Permanen
┃ 
┃ Silahkan Hubungi Owner
┃ Untuk Menjadi Premium User
┃ 
┃ Untuk Pembayaran Silahkan 
┃ cek di #donasi
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^premium$/i
handler.group = false
handler.register = true

module.exports = handler
