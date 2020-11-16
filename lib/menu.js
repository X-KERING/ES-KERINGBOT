const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

exports.textTnC = () => {
    return `
Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:

- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.

📌 *OWNER*      : HAFIZH
📌 *OWNER BOT* : 0859-59375-675

Hope Have Nice Day>_<.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
🔰=====[ *ES KERING BOT*]=====🔰

Hallo ${pushname}:*
Berikut adalah beberapa fitur yang ada pada bot ini!✨

*BUATLAH BOT INI SEBERGUNA MUNGKIN AGAR OWNER TIDAK SIA" MEMBAYAR VPS :')*

🔰*WARNING: KALAU PESAN ANDA IDAK DI RESPON OLEH BOT.. ITU ARTINYA KENA SPAM.. JADI ULANGI SAJA COMMANDNYA*🔰

☾ Creator 🛠️☽
♻️ *${prefix}sticker*
♻️ *${prefix}stickergif*
♻️ *${prefix}stickergiphy*
♻️ *${prefix}sticker nobg*
♻️ *${prefix}meme*
♻️ *${prefix}quotemaker*

☾ Islam 🧕👳‍♂️ ☽
♻️ *${prefix}infosurah*
♻️ *${prefix}surah*
♻️ *${prefix}tafsir*
♻️ *${prefix}alaudio*
♻️ *${prefix}jsolat*
♻️ *${prefix}listsurah*

☾ Download 🎬 ☽
♻️ *${prefix}instagram*
♻️ *${prefix}ytmp3*
♻️ *${prefix}ytmp4*

☾ GABUT 🚮 ☽
♻️ *${prefix}artinama*
♻️ *${prefix}cekjodoh*

☾ Search Any 🔍 ☽
♻️ *${prefix}images*
♻️ *${prefix}sreddit*
♻️ *${prefix}resep*
♻️ *${prefix}stalkig*
♻️ *${prefix}wiki*
♻️ *${prefix}cuaca*
♻️ *${prefix}chord*
♻️ *${prefix}lirik*
♻️ *${prefix}ss*
♻️ *${prefix}play*
♻️ *${prefix}whatanime*

☾ Random Teks 💬 ☽ 
♻️ *${prefix}fakta*
♻️ *${prefix}pantun*
♻️ *${prefix}katabijak*
♻️ *${prefix}quote*

☾ Random Images 📸 ☽
♻️ *${prefix}anime*
♻️ *${prefix}kpop*
♻️ *${prefix}memes*

☾ Lain-lain 💠 ☽
♻️ *${prefix}tts*
♻️ *${prefix}translate*
♻️ *${prefix}resi*
♻️ *${prefix}shortlink*
♻️ *${prefix}ping*
♻️ *${prefix}bapakfont*
♻️ *${prefix}covidindo*

☾ Tentang Bot 🤖 ☽
♻️ *${prefix}tnc*
♻️ *${prefix}donasi*
♻️ *${prefix}join*
♻️ *${prefix}ownerbot*
♻️ *${prefix}botstatus*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

☾ Owner Bot 🤖 ☽
♻️ *${prefix}ban* - banned
♻️ *${prefix}bc* - promosi
♻️ *${prefix}leaveall* - keluar semua grup
♻️ *${prefix}clearall* - hapus semua chat

🔰 *BOT AKTIF* : *SAAT HAFIZH ONLINE*
🔰 *GUNAKAN BOT DENGAN BIJAK!*

JOIN TO OFFICIAL GRUP: https://chat.whatsapp.com/GZep6b2UjdRKc3054A5SZY

Semoga Harimu Menyenangkan!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

♻️ *${prefix}add*
♻️ *${prefix}kick* @tag
♻️ *${prefix}promote* @tag
♻️ *${prefix}demote* @tag
♻️ *${prefix}tagall*
♻️ *${prefix}del*
`
}


exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

📌 *PULSA*         : 085959375675
📌 *saweria*       : htpps://saweria.co/HAFizhscript

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini agar lebih meningkat skillnya dan bisa membuat pengguna lebih nyaman

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini termasuk membayar VPS.

Terimakasih.`
}
