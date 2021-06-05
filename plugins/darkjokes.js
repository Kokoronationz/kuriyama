let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'drag joles',m)
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^darkjokes$/i
handler.disabled = true
handler.register = true
handler.limit = false
module.exports = handler
