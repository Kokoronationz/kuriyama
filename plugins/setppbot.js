let { Presence } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text, args, bot, isOwner, command, usedPrefix }) => {
    await m.reply(global.wait)
    const type = Object.keys(m.message)[0]
    const content = JSON.stringify(m.message)
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
         try {
         if ((isMedia && !m.message.videoMessage || isQuotedImage) && args.length == 0) {
         if (!isOwner) return m.reply('```Anda Siapa?```')
         conn.updatePresence(m.chat, Presence.composing) 
         //if (!isQuotedImage) return m.reply(`_Kirim gambar dengan caption ${usedPrefix}setppbot atau tag gambar yang sudah dikirim_`)
         enmedia = isMedia || isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
         media = await conn.downloadAndSaveMediaMessage(enmedia)
         await conn.updateProfilePicture(global.conn.user.jid, media)
         m.reply('```Success Change Profil Picture```')
  } else {
        m.reply('_Reply Fotonya!_')
        }
	 } catch (e) {
   m.reply('```Error```')
   console.log(e)
 }
}
					
handler.help = ['setppbot']
handler.tags = ['owner']
handler.command = /^(setppb?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
