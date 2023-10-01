import fetch from 'node-fetch';
import util from 'util';
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  var js = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${apilol}&text=${text}&user=user-unique-id`)
var json = await js.json()
try {
  await conn.sendMessage(m.chat, {
text: json.message,
contextInfo: {
externalAdReply: { 
title: 'Chat GPT',
body: 'SUBSCRIBE YOUTUBEKU',
thumbnailUrl: "https://telegra.ph/file/7a385897829927b981dfa.jpg",
sourceUrl: "https://youtube.com/@PangeranD",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fakes})
} catch (err) {
m.reply(util.format(js))
}}
handler.command = handler.help = ['ai2','openai2','chatgpt2'];
handler.tags = ['info'];
handler.limit = 3;
export default handler;
