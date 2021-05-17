let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await conn.downloadM(q)
      if (!img) throw `Foto tidak ditemukan`
     conn.updateProfilePicture (m.chat, img)
    conn.reply(m.chat, 'Sukses Mengganti Foto Profile Group!', m)
        }
    }
handler.help = ['setppgrup']
handler.tags = ['group']
handler.command = /^(setppgro?up)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler