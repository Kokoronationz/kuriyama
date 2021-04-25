let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
	conn.updatePresence(m.chat, Presence.composing) 
	let res = await conn.groupMetadata(m.chat)
	let pp = './src/avatar_contact.png'
  try {
	pp = await conn.getProfilePicture(m.chat)
		} catch (e) {
	} finally {
	
		let welcome = global.DATABASE.data.chats[m.chat].welcome
		let antiToxic = global.DATABASE.data.chats[m.chat].antiToxic
		let antiLink = global.DATABASE.data.chats[m.chat].antiLink
		let hapus = global.DATABASE.data.chats[m.chat].delete
    let isBanned = global.DATABASE.data.chats[m.chat].isBanned
    
	var name = conn.getName(m.chat)
	
	conn.sendFile(m.chat, pp, 'profile.jpg', `*[ ${ucword(name)} ]*\n\n  - Banned : ${data(isBanned)}\n  - Anti-Link : ${data(antiLink)}\n  - Anti-Toxic : ${data(antiToxic)}\n  - Welcome Msg : ${data(welcome)}\n  - delete Msg : ${data(hapus)}\n\n     ${res.desc}`, m)
	}
}
handler.help = ['groupinfo']
handler.tags = ['group']
handler.command = /^(groupinfo)$/i
handler.register = true
handler.group = true
handler.limit = false
module.exports = handler

function ucword(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

function data(str){
	if (ucword(str) == "False"){
		return "Inactive"
	}else {
		return "Active"
	}
}
