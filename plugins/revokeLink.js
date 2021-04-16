let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.query({
        json: ["action", "new", code]
    })
    if (res.status !== 200) throw res
    m.reply(`Link group berhasil disetel ulang`)
}
}
handler.help = ['revoke']
handler.tags = ['']
handler.command = /^revoke$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler