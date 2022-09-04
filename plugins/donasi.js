let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [082199086847]
│ • Dana [082199086847]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [082199086847]
│ • Pulsa [082199086847]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
