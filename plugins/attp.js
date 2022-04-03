const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const KeyLol = ['UAkOKdct','tJgWUsGV', 'gZuwdayT', 'vw6q6fEr', 'S6bEnCiS', 'zekais', 'FMoh8lhs']
const Lol = KeyLol[Math.floor(Math.random() * KeyLol.length)]

const DESC_BOB = "Sevimli bir sünger bob gönderisi"

const DESC_RAND = "Yazdığınız metni qr koda dönüştürür."

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'private') {
    Asena.addCommand({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by spektral' })
    }));
    Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
Asena.addCommand({ pattern: 'bob ?(.*)', fromMe: true, desc: DESC_BOB }, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
var uria = encodeURI(match[1])
var ttinullimageh = await axios.get(`https://zekais-api.herokuapp.com/sbburn?text=${uria}&apikey=${Lol}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(ttinullimageh.data), MessageType.image)
}));
    
Asena.addCommand({pattern: 'slot ?(.*)', fromMe: true, desc: 'Mini oyun'}, (async (message, match) => { 
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
                '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐 Kazandın dostum! 👑',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔 Kazandım dostum! 👑',
		'🍒 : 🍒 : 🍒 Kazandım dostum! 👑',
		'🍌 : 🍌 : 🍌 Kazandım dostum! 👑'
		]   
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
await message.sendMessage(`[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]`);
}));
    
Asena.addCommand({ pattern: 'qrcode ?(.*)', fromMe: true, desc: DESC_RAND }, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
var uria = encodeURI(match[1])
var ttinullimageh = await axios.get(`https://api.zeks.me/api/qrencode?apikey=apivinz&text=${uria}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(ttinullimageh.data), MessageType.image)
}));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by publicbot' })
    }));
    Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
    
Asena.addCommand({ pattern: 'bob ?(.*)', fromMe: false, desc: DESC_BOB }, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
var uria = encodeURI(match[1])
var ttinullimageh = await axios.get(`https://zekais-api.herokuapp.com/sbburn?text=${uria}&apikey=${Lol}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(ttinullimageh.data), MessageType.image)
}));
    
    Asena.addCommand({pattern: 'slot ?(.*)', fromMe: false, desc: 'Mini game for you'}, (async (message, match) => { 
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐 Congratulation, you won! 👑',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔 Congratulation, you won! 👑',
		'🍒 : 🍒 : 🍒 Congratulation, you won! 👑',
		'🍌 : 🍌 : 🍌 Congratulation, you won! 👑'
		]   
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
await message.sendMessage(`[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]`);
}));
    
Asena.addCommand({ pattern: 'qrcode ?(.*)', fromMe: false, desc: DESC_RAND }, (async (message, match) => {
if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
var uria = encodeURI(match[1])
var ttinullimageh = await axios.get(`https://api.zeks.me/api/qrencode?apikey=apivinz&text=${uria}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(ttinullimageh.data), MessageType.image)
}));
}
