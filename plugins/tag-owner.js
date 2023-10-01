import fs from 'fs'

let handler  = async (m, { conn }) => {
let tag = fs.readFileSync('./src/tag.webp')
conn.sendFile(m.chat, tag, '', '', m)
}
handler.customPrefix = /^(@62859343626616)$/i
handler.command = new RegExp

export default handler