let handler = async (m, { conn, command, text }) => {
  if (!text) text = '@' + m.sender.split`@`[0]
  conn.reply(m.chat, `
${command} *${text}*

*${text}* is *${Math.floor(Math.random() * 101)}*% ${command.replace('cek', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['bucin', 'cantik', 'gabut', 'ganteng', 'gay', 'gila', 'halu', 'jones', 'lesbi', 'pintar', 'sadboy', 'sadgirl', 'stress', 'tolol', 'wibu'].map(v => v + 'cek @user')
handler.tags = ['fun']
handler.command = /^(gay|pintar|cantik|ganteng|gabut|gila|halu|lesbi|stress?|bucin|jones|sad(boy|girl)|tolol|wibu)cek/i
handler.register = true

module.exports = handler