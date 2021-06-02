let fetch = require("node-fetch")

let handler = async(m, { conn, text }) => {
	if (!text) return m.reply ("Masukkan linknya!")
 try {
   await m.reply(global.wait)
 	let res = await fetch("https://toksaver.com/convertok?url=" + text)
     let json = await res.json()
     let { 
       no_watermark 
     } = json
    conn.sendFile(m.chat, no_watermark, 'tt.mp4', '*©Kuriyama-Bot*', m)
    }catch (e){
    	m.reply("Error")
    console.log (e)
    }
 }
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok(dl)?)$/i
handler.register = true
handler.premium = true

module.exports = handler
