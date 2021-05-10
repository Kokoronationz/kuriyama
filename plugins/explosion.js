let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/explosion.opus'
conn.sendFile(m.chat, vn, 'explosion.opus', null, m, {
  type: 'audioMessage',
  ptt: true
})
}
handler.customPrefix = /bakuretsu|ledakin/i
handler.command = new RegExp
module.exports = handler