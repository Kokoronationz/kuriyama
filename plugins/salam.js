let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/waalaikumsalam.opus'
conn.sendFile(m.chat, vn, 'waalaikumsalam.opus', null, m, {
  type: 'audioMessage',
  ptt: true
})
}
handler.customPrefix = /assalamualaikum/i
handler.command = new RegExp
module.exports = handler