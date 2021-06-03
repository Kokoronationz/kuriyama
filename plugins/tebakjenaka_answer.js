let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Tebak Jenaka 」/i.test(m.quoted.text)) return !0
  conn.tebakjenaka = conn.tebakjenaka ? conn.tebakjenaka : {}
  if (!(id in conn.tebakjenaka)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.tebakjenaka[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tebakjenaka[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.result.answer.toLowerCase()) {
      global.DATABASE._data.users[m.sender].uang += conn.tebakjenaka[id][2]
      m.reply(`*Benar!*\n+Rp${conn.tebakjenaka[id][2]}`)
      clearTimeout(conn.tebakjenaka[id][3])
      delete conn.tebakjenaka[id]
    } else if (m.text.toLowerCase().endsWith(json.result.answer.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
