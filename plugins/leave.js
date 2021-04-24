let handler = async function(m, { conn, args, isPrems, isOwner }) {

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      this.reply(m.chat, `Bye Semua 🙂`, { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `${conn.user.name} Verified Bot`, "jpegThumbnail": fs.readFileSync(`./src/mirai.png`)} } })
      await time(5000)
  await conn.groupLeave(m.key.remoteJid)
}
handler.help = ['leave', 'keluar']
handler.tags = ['group']
handler.command = /^(leave|keluar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler