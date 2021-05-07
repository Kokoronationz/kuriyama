let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn ='src/konbanwa.opus' //tergantung nama file
conn.sendFile(m.chat, vn, 'konbanwa.opus', null, m, true, {
  type: 'audioMessage', 
  ptt: true
})
}
handler.customPrefix = /konban?wa/i
handler.command = new RegExp
module.exports = handler