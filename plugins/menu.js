let fs = require ('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let handler  = async (m, { conn, usedPrefix: _p, isPrems}) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let kuriyama = './src/photo/kuriyama.png'
    let { name, exp, uang, limit, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let kokoronationz = 'https://bit.ly/Kokoronationz'
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    //let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + d.getTimezoneOffset()) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      'main': 'Main',
      'xp': 'Exp & Limit',
      'sticker': 'Sticker',
      //'islamic': 'Islamic',
      'weebs': 'Weebs',
      //'nsfw': 'NSFW 🔞',
      'game': 'Game',
      'fun': 'Fun',
      'anonymous': 'Anonymous Chat',
      'kerang': 'Kerang Ajaib',
      'quotes': 'Quotes',
      'primbon': 'Primbon Menu',
      'nulis': 'MagerNulis',
      'creator': 'Creator',
      'videomaker': 'Videomaker',
      'internet': 'Internet',
      'downloader': 'Downloader',
      'admin': 'Admin',
      'group': 'Group',
      'tools': 'Tools',
      'jadibot': 'Jadi Bot',
      'premium': 'Premium Menu',
      'owner': 'Owner',
      'host': 'Host',
      'database': 'Database',
      'advanced': 'Advanced',
      'info': 'Info',
      '': 'No Category',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 ${conn.user.name} 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ ❖ Hai @${m.sender.split`@`[0]}!
┃
┃ ❖ *Name:* %name
┃ ❖ *Level:* %level (%exp / %maxexp)
┃ ❖ *EXP:* %totalexp XP
┃ ❖ *Saldo:* Rp%saldo
┃ ❖ *Limit:* %limit
┃ ❖ *Premium:* ${premium ? 'YES':'NO'}
┃
┃ ❖ *Hari:* %week %weton
┃ ❖ *Tanggal:* %date
┃ ❖ *Tanggal Islam:* %dateIslamic
┃ ❖ *Waktu:* %time
┃
┃ ❖ *Uptime:* _%uptime_ (%muptime)
┃ ❖ *Database:* %rtotalreg of %totalreg
┃ ❖ *Contact:*
┃     _${kokoronationz}_
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
%readmore
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Thanks to 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ Nurutomo
┃ ❖ St4rz
┃ ❖ DrawlNag
┃ ❖ Ariffb
┃ ❖ RC047
┃ ❖ Dan Kawan-kawan
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`
    let header = conn.menu.header || '┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━\n┇       *「 %category 」*\n┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━'
    let body   = conn.menu.body   || '┃ ❖  %cmd%islimit'
    let footer = conn.menu.footer || '┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      saldo: uang,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => ''+replace[name])
    //conn.fakeReply(m.chat, text.trim(), '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, 'status@broadcast')
    conn.sendFile(m.chat, kuriyama, 'kuriyama.jpg', text.trim(), { 
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '0@s.whatsapp.net', 
        fromMe: false 
      }, 
      message: { 
        "imageMessage": { "mimetype": "image/jpeg", 
        "caption": `${conn.user.name} Verified Bot`, 
        "jpegThumbnail": fs.readFileSync(`./src/photo/mirai.png`)
        } 
      }
    }, m, { contextInfo: { mentionedJid: [m.sender] } })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
