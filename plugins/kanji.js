let fs = require("fs")
let fetch = require("node-fetch")
let handler = async(m, { conn, text }) => {
	if (!text) return m.reply ("Masukkan Kanji!")
 try {
 	let res = await fetch("https://kanjiapi.dev/v1/kanji/" + encodeURIComponent(text))
     let json = await res.json()
     let { 
kanji, 
grade, 
stroke_count, 
meanings, 
kun_readings, 
on_readings, 
name_readings, 
jlpt, 
unicode, 
heisig_en 
} = json

let foto = 'https://telegra.ph/file/8e66e1b3d6ab300031c43.png'
let caption = `
*「 Kanji Information 」*

*Kanji:* ${kanji}
*Arti:* ${meanings.join()}
*Kun Reading:* ${kun_readings}
*On Reading:* ${on_readings}
*Reading:* ${name_readings}
*Grade:* ${grade}
*Stroke:* ${stroke_count}
*JLPT:* ${jlpt}
*Unicode:* ${unicode}
*Heisig En:* ${heisig_en}
`.trim ()
    conn.sendFile(m.chat, foto, 'foto.jpg', caption, m)
    }catch (e){
    	m.reply("Error")
    console.log (e)
    }
 }

handler.help = ['kanji'].map(v => v + '<kanji>')
handler.tags = ['kanji']
handler.command = /^(kanji)$/i
handler.register = true

module.exports = handler