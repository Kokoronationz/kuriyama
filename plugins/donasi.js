let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 DONASI 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ Pulsa [085156381082]
┃ ❖ Dana [0895361677059]
┃ ❖ GoPay [0895361677059]
┃ ❖ OVO [0895361677059]
┃ ❖ LinkAja [0895361677059]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━

Terimakasih sudah berdonasi 😁
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.register = true

module.exports = handler