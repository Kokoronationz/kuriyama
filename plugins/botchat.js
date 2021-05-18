let handler  = async (m, { conn }) => {
  
let name = conn.getName(m.sender)
let pesan = `Hai ${name}, aku disini:D\n\nAda yang bisa aku bantu?`
conn.reply(m.chat, pesan, m)
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler