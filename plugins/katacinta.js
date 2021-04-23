let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('http://api-iam.herokuapp.com/api/katacinta')
  let katacinta = await url.json()
let hasil = `_*➸${katacinta.result}*_`

  m.reply(hasil)
}
handler.help = ['katacinta']
handler.tags = ['quotes']
handler.command = /^katacinta$/i
handler.group = true
handler.register = true

module.exports = handler
