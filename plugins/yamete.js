let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn ='src/yamete.opus'
conn.sendFile(m.chat, vn, 'yamete.opus','salam', m)
}
handler.customPrefix = /Yamete/
handler.command = new RegExp
module.exports = handler