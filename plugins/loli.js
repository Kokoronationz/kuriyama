let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
 let res = await fetch('https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA')
 let { result } = await res.json()
 let hasil = `*@kuriyama-bot*`
 conn.sendFile(m.chat, result, 'result.jpg', hasil, m)
}
handler.help = ['loli']
handler.tags = ['weebs']
handler.command = /^loli$/i
handler.group = true
handler.register = true
handler.fail = null
handler.limit = true

module.exports = handler
