let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn ='src/ohayou.opus'
conn.sendFile(m.chat, vn, 'audio.opus', null, m, true)
}
handler.customPrefix = /ohayou?/i
handler.command = new RegExp
module.exports = handler
