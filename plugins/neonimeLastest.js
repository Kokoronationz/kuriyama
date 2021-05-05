  const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    await m.reply(global.wait)
    axios.get(`https://docs-jojo.herokuapp.com/api/neonime_lastest`)
        .then((res) => {
          let hasil = res.data.result.map(res=>`*Judul:* ${res.judul}\n*Rilis:* ${res.rilis}\n*Link:* ${res.link}`.join('\n\n━ ┅ ━━━━━━━━━━━━━━━ ┅ ━\n\n')
            m.reply(m.chat, hasil, m)
        })
        .catch()
}
handler.help = ['neonimelastest']
handler.tags = ['weebs']
handler.command = /^neo(nime)?last(est)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
