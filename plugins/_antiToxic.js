let handler = m => m

let linkRegex = /(asu)|(anj(i?ng))|(me(mek|ki))|(kontol)|(ba(bi|ngsat|jingan))|(goblo(k|g))|(fuck)|(janc[ou]k)|(jemb[ou]t)|(temp[ei]k)|(t[ou]l[ou]l)|(bgst)|(ngento(t|d))|(bego)/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupToxic = linkRegex.exec(m.text)

  if (!chat.antiToxic && isGroupToxic) {
    m.reply('Jangan Toxic ya!!\n' + readMore + '\nMau Matikan? ketik *#disable antitoxic*')
    if (global.opts['restrict']) {
      // if (!user.isAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
