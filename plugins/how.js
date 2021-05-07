let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa yang *${command.replace('cek', '').toUpperCase()}*`
  conn.reply(m.chat, `
${command} *${text}*

*${text}* is *${Math.floor(Math.random() * 101)}*% ${command.replace('cek', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy', 'tolol'].map(v => v + 'cek @user')
handler.tags = ['fun']
handler.command = /^(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy|tolol)cek/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler