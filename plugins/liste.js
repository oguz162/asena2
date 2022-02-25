
oguz162
/
asena2
Private
Code
Issues
Pull requests
Projects
Security
Insights
Settings
asena2/plugins/liste.js
@oguz162
oguz162 Update liste.js
 1 contributor
36 lines (29 sloc)  5.31 KB
const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

Asena.addCommand({pattern: 'liste', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
// buton mesajı gönderirir Zlose
    var plk_say = new Date().toLocaleString('tr', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
const get_localized_date = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Saat :' + plk_say + '```\n\n ```📅 Tarih :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '☃️ Komutlar ❄️\n\n\n|   Komut 💻 |Açıklama ℹ️|\n| ---------- | -------------------- |\n| .add| Gruba kişi ekler.|\n| .addlydia| Yapay zeka sohbetini aktif eder.|\n| .afk| Sizi AFK yapar. Özel mesaj yada etiket aldığınızda afk mesajını gönderir.|\n| .alive| Botun çalışıp çalışmadığını kontrol eder.|\n| .asena| Varolan tüm komutları gösterir.|\n| .ban| Kullanıcıyı gruptan çıkarır.|\n| .block| Kullanıcıyı WhatsApp,dan engeller.|\n| .carbon| Yazıyı kod resmine çevirir.|\n| .currency| Para birimlerini çevirir.|\n| .deepai| Deep AI yapay zekâsı ile derin öğrenme kullanan AI araçlarının listesini verir.|\n| .delvar| Config var siler.|\n| .demote| Gruptaki birinden adminliği alır.|\n| .dyno| Kalan dyno saatinizi gösterir.|\n| .ffmpeg| Videoya istenilen ffmpeg filtresini uygular.|\n| .filter| Filtre ekler. Birsi filtreyi yazdığında aktif olur.|\n| .getvar| Config var durumunu gösterir.|\n| .goodbye| Gruptan çıkanlara mesaj atar.|\n| .imagesticker| Sabit stickeri fotoğrafa çevirir.|\n| .img| Yazdığınız kelimeden 5 adet fotoğraf indirir.|\n| .install| Plugin yükler.|\n| .invite| Grubun bağlantısını gönderir.|\n| .jid| Herhangi bir kişinin jid adresini gösterir.|\n| .kickme| Sizi olduğunuz gruptan atar.|\n| .locate| Konumunuzu hızlıca gönderir.|\n| .meme| Fotoğrafa meme yapar.|\n| .mp4audio| Videoyu sese çevirir.|\n| .mute| Sohbeti kapatır.|\n| .neko| Yanıtladığınız mesajı nekobin,e kaydeder.|\n| .ocr| Fotoğrafki yazıyı okur ve metne çevirir.|\n| .ping| Ping ölçer.|\n| .plugin| Yüklediğiniz pluginleri gösterir.|\n| .pp| Yanıtladığınız fotoğrafı profil fotoğrafınız yapar.|\n| .promote| Gruptaki birini admin yapar.|\n| .remove| Plugin siler.|\n| .removebg| Yanıtladığınız fotoğrafın arka planını kaldırır.|\n| .restart| Botu yeniden başlatır.|\n| .rmlydia| Yapay zeka sohbetini durdurur.|\n| .scam| Sahte eylemler yapar.|\n| .setvar| Config var ayarlar.|\n| .shutdown| Botu Kapatır.|\n| .song| Yazdığınız şarkıyı indirir.|\n| .spam| Siz durdurana kadar yazdığınız metni spam olarak gönderir.|\n| .speedtest| Hız testi yapar.|\n| .killspam| Spamı durdurur.|\n| .sticker| Fotoğrafı veya videoyu sticker yapar.|\n| .stop| Filteyi durdurur.|\n| .ss| Verilen linkteki sayfanın ekran görüntüsünü alır.|\n| .sysd| Sistem özelliklerini gösterir.|\n| .tagall| Gruptaki herkesi etiketler.|\n| .term| Sunucu shell,inde komut yürütme imkanı tanır.|\n| .trt| Diller arası çeviri yapar.|\n| .tts| Yazıyı sesli mesaja çevirir.|\n| .ttp| Yazıyı resme çevirir.|\n| .attp| Yazıyı renkli stcikere çevirir.|\n| .glowttp| Yazıyı neon resme çevirir.|\n| .tblend| Videoya değişik efektler uygular.|\n| .animesay| Yazıyı anime kızının tuttuğu bannere çevirir.|\n| .trumpsay| Trump,un ağzından tweet gönderir.|\n| .changesay| Change my mind posteri oluşturur.|\n| .covid| Covid tablosunu gösterir.|\n| .github| Github kullanıcı bilgilerini bulur.|\n| .insta| İnstagram kullanıcı bilgilerini bulur.|\n| .tiktok| Tiktok,tan video indirir.|\n| .lyric| Şarkı sözlerini bulur.|\n| .unblock| Kullanıcının WhatsApp engelini kaldırır.|\n| .unmute| Sohbeti açar.|\n| .unvoice| Herhangi bir sesi sesli mesaj olarak gönderir.|\n| .update now| Güncelleme yapar.|\n| .update| Güncellemeleri denetler.|\n| .video| Youtube üzerinden video indirir.|\n| .weather| Yazdığınız şehrin hava durumu gösterir.|\n| .welcome| Gruba girenleri karşılaşma mesajı atar.|\n| .wiki| Wikipedia üzerinde arama yapar.|\n| .xmedia| Fotoğrafa, videoya ve sese uygulayabileceğiniz hazır efektleri gösterir.|\n| .yt| Youtube üzerinde arana yapar.|\n| .wallpaper| Rastgele yüksek çözünürlüklü duvar kağıdı gönderir.|'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '☃️ düzenlenecek ❄️'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: '☃️ Xmedia komutları ❄️\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc: 🇹🇷 Videnun kalitesini artırır.\n\n💻Usage: *.interp*\nℹ️Desc: 🇹🇷 Videonun FPS değerini arttırır.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: 🇹🇷 Ağır çekim olmayan videolara true-slowmo uygular.\n\n💻Usage: *.x4mp4*\nℹ️Desc: 🇹🇷 Video Kalitesini 4 kat düşürür.\n\n💻Usage: *.x2mp4*\nℹ️Desc: 🇹🇷 Video Kalitesini 2 kat düşürür.\n\n💻Usage: *.gif*\nℹ️Desc: 🇹🇷 Videoyu gif’e çevirir.\n\n💻Usage: *.agif*\nℹ️Desc: 🇹🇷 Videoyu sesli gif’e çevirir.\n\n💻Usage: *.mp4blur*\nℹ️Desc: 🇹🇷 Video arka planını bulanıklaştırır.\n\n💻Usage: *.mp4stab*\nℹ️Desc: 🇹🇷 Videonun titreşimini azaltır.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: 🇹🇷 Videoya gökkuşağı efekti uygular.\n\n💻Usage: *.mp4ephi*\nℹ️Desc: 🇹🇷 Videoya rgb değişim efekti uygular.\n\n💻Usage: *.mp4color*\nℹ️Desc: 🇹🇷 Videonun renklerini daha canlı ve çekici yapar.\n\n💻Usage: *.mp4art*\nℹ️Desc: 🇹🇷 Videoya çizim efekti uygular.\n\n💻Usage: *.mp4negative*\nℹ️Desc: 🇹🇷 Videoya negatif renk filtresi uygular.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: 🇹🇷 Videoya nostaji efekti uygular.\n\n💻Usage: *.mp4bw*\nℹ️Desc: 🇹🇷 Videoya monochrome efekti uygular.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: 🇹🇷 Videoyu tersten oynatır.\n\n💻Usage: *.mp4edge*\nℹ️Desc: 🇹🇷 Videoya edge efekti uygular.\n\n💻Usage: *.mp4image*\nℹ️Desc: 🇹🇷 Fotoğrafı 5 saniyelik videoya çevirir.\n\n💻Usage: *.spectrum*\nℹ️Desc: 🇹🇷 Sesin spektrum görüntüsünü video yapar.\n\n💻Usage: *.waves*\nℹ️Desc: 🇹🇷 Sesin dalga aralığını videoya çevirir.\n\n💻Usage: *.frequency*\nℹ️Desc: 🇹🇷 Sesin frekans aralığını videoya çevirir.\n\n💻Usage: *.avec*\nℹ️Desc: 🇹🇷 Sesin farklı bir histogramını videoya çevirir.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: 🇹🇷 Sesin Desibel Değerini Videoya Dönüştürür.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: 🇹🇷 Ses CQT değerini videoya çevirir.\n\n💻Usage: *.mp3eq*\nℹ️Desc: 🇹🇷 Sesi kristal berraklık düzeyinde ayarlar.\n\n💻Usage: *.mp3crusher*\nℹ️Desc: 🇹🇷 Sesi bozar ve gülünç hale getirir.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: 🇹🇷 Sesi Tersen Oynatır.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: 🇹🇷 Sesi inceltir ve hızlandırır.\n\n💻Usage *.mp3low*\nℹ️Desc: 🇹🇷 Sesi kalınlaştırır ve yavaşlatır.\n\n💻Usage: *.x2mp3*\nℹ️Desc: 🇹🇷 Sesi 2 kat hızlandırır.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.'}, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' selam dostum---🧚\n\n```𝔅𝔬𝔱 İ𝔰𝔪𝔦:``` *'+Config.BOT+'*\n```𝔅𝔬𝔱 𝔖𝔞𝔥𝔦𝔟𝔦:``` *'+Config.OWNER+'\n\n⏱ 𝔖𝔞𝔞𝔱   : ```' + plk_say + '```\n📅 𝔗𝔞𝔯𝔦𝔥 : ```' + plk_here + '```\n\n☃️ komut listelerini açmak için aşağıdaki butonlara tıklayınız :)\n', 
          footerText: '✮ Zlose 💕',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
