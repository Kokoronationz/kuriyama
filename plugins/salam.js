let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn ='src/waalaikumsalam.opus'
conn.sendFile(m.chat, vn, 'salam.opus', null, m, true, {
  type: 'audioMessage', 
  ptt: true
})
}
handler.customPrefix = /Assalamualaikum|assalamualaikumm/i
handler.command = new RegExp
module.exports = handler