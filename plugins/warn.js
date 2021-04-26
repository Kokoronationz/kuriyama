let handler = async (m, { conn, args}) => {
    if (args.length > 0) {
  const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
        let mention = args[0].replace(/[@]/g, '')
        let ban = (mention + '@s.whatsapp.net')
        let warn = global.DATABASE._data.users[ban].warn
        if (warn < 2) {
            global.DATABASE._data.users[ban].warn += 1
            conn.reply(m.chat, `berhasil Warn`, m)
            m.reply('Kamu telah diperingatkan oleh admin, dan sekarang kamu punya ' + (warn + 1) + ' warn . Ingat Jika kamu mendapat warn 3 kali kamu akan otomatis ditendang dari Grup', ban)
        } else if (warn == 2) {
            global.DATABASE._data.users[ban].Banneduser = true
            global.DATABASE._data.users[ban].warn = 0
            this.fakeReply(m.chat, 'Selamat Jalan Kawan', '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, m.chat)
             m.reply('*Kamu dikick karena telah mendapat 3 kali warn*', ban)
                await time(5000)
             await conn.groupRemove(m.chat, [ban])
           
        }
    } else conn.reply(m.chat, 'Siapa yang mau di Warn om?', m)
}
handler.help = ['warn @mention']
handler.tags = ['group']
handler.command = /^warn$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler