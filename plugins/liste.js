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
var plk_say = new Date().toLocaleString('tr', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
const get_localized_date = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Saat :' + plk_say + '```\n\n ```📅 Tarih :' + plk_here + '```'
var wish = ''
if (hrs >= 00 && hrs <= 12) wish = '𝑮𝑶𝑶𝑫 𝑴𝑶𝑹𝑵𝑰𝑵𝑮 ⛅'
if (hrs >= 12 && hrs <= 17) wish = '𝑮𝑶𝑶𝑫 𝑨𝑭𝑻𝑬𝑹𝑵𝑶𝑶𝑵 🌞'
if (hrs >= 17 && hrs <= 19) wish = '𝑮𝑶𝑶𝑫 𝑬𝑽𝑬𝑵𝑰𝑵𝑮 🌥'
if (hrs >= 19 && hrs <= 23) wish = '𝑮𝑶𝑶𝑫 𝑵𝑰𝑮𝑯𝑻 🌙'	


Asena.addCommand({pattern: 'liste', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
// buton mesajı gönderirir Zlose

        const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '〘 ☣️ *ƙꪮꪑꪊᡶ ꪶİకᡶꫀకİ* ☣️ 〙\n━━━━━━━━━━━━━━━━━━━━━\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n🌀 .meme \n💘  ```İstediğiniz fotoğrafı meme haline getirir fotoğrafa yanıt verin ve bir metin yazın.``` \n\n🌀 .xmedia\n💘  ```25 ten fazla medya aracına sahip bir eklentidir.``` \n\n🌀 .install\n💘  ```Harici eklentiler yükler.``` \n*⚠️ Uyarı!:* ```Eklentileri birden fazla kez yüklememeye dikkat ediniz.```\n\n🌀 .plugin\n💘  ```Yüklediğiniz eklentileri gösterir.``` \n\n🌀 .remove\n💘  ```Yüklediğiniz eklentileri kaldırır.``` \n\n🌀 .ban \n💘  ```Admin olduğunuz gruptan istediğiniz kişiyi banlar mesajı yanıtlayın yada komutun yanına kişiyi etiketleyin.``` \n\n🌀 .add\n💘  ```komutun yanına yazdığımız numarayı grubunuza ekler ÖRNEK: .add 905516491871.``` \n\n🌀 .promote \n💘  ```Admin olduğunuz grupta istediğiniz kişiyi yöneticilik derecesine yükseltir mesajı yanıtlayın yada komutun yanına kişiyi etiketleyin.``` \n\n🌀 .demote \n💘  ```Admin olduğunuz grupta istediğiniz yöneticinin yetkisini geri alır mesajı yanıtlayın yada komutun yanına kişiyi etiketleyin.``` \n\n🌀 .mute \n💘  ```Admin olduğunuz grubu istediğiniz süre kadar yetkisizlere kapatır.\n⌨️ ÖRNEK: .mute veya .mute 5m vb``` \n\n🌀 .unmute \n💘  ```Admin olduğunuz grupta yetkisizler için kapatılmış sohbeti tekrar geri açar ve herkes için mesaj gönderibilir duruma getirir.``` \n\n🌀 .invite \n💘  ```Grubun davet bağlantısını getirir.``` \n\n🌀 .revoke\n💘  ```Grubun davet bağlantısını sıfırlar iptal eder``` \n\n🌀 .apkmod\n💘  ```Bazı özel modlar getirir.``` \n\n🌀 .ttp \n💘  ```Metni düz resme dönüştürür.``` \n\n🌀 .attp \n💘  ```Metne çıkartma olarak gökkuşağı efekti ekler.``` \n\n🌀 .bob \n💘  ```Sevimli bir sünger bob gönderisi``` \n\n🌀 .slot \n💘  ```Mini oyun``` \n\n🌀 .qrcode \n💘  ```Yazdığınız metni qr koda dönüştürür.``` \n\n🌀 .carbon\n💘  ```metni carbon haline çevirir``` \n\n🌀 .mp3\n💘  ```Videoyu sese dönüştürür.``` \n\n🌀 .photo\n💘  ``` Çıkartmayı fotoğrafa dönüştürür.``` \n\n🌀 .mp4\n💘  ```Animasyonlu çıkartmaları videoya dönüştürür.``` \n\n🌀 .durumv\n💘  ```Video halindeki Whatsapp durumlarını indirir...``` \n\n🌀 .durumf\n💘  ```Foto halindeki Whatsapp durumlarını indirir``` \n\n🌀 .welcome\n💘  ```Hoşgeldiniz mesajı ayarlar grubunuza birisi katılırsa ayarladığınız mesajla karşılar sadece komutu yazarsanız ayarladığınız mesajı gösterir.``` \n\n🌀 .goodbye\n💘  ```Hoşçakal mesajı ayarlar grubunuzdan birisi ayrılırsa ayarladığınız mesajla uğurlar sadece komutu yazarsanız ayarladığınız mesajı gösterir.``` \n\n🌀 .notes\n💘  ```Mevcut tüm notlarınızı gösterir.``` \n\n🌀 .save \n💘  ```Bir mesajı yanıtlayın ve .save yazın veya yanıtlamadan sadece .save <Notunuz> öğesini kullanın``` \n\n🌀 .deleteNotes\n💘  ```Kaydedilmiş *tüm* notlarınızı siler.``` \n\n🌀 .jid \n💘  ```Sohbetin yada kişinin jid adresini verir.``` \n\n🌀 .removebg \n💘  ```Fotoğrafların arka planını kaldırır.``` \n\n🌀 .report \n💘  ```Raporları grup yöneticilerine gönderir.``` \n\n🌀 .scan \n💘  ```Girilen numaranın WhatAppta kayıtlı olup olmadığını kontrol edin.``` \n\n🌀 .trt\n💘  ```Google translate ile çeviri yapar mesajı yanıtlayarak kullanın.``` \n*⌨️ Örnek:- :* ```.trt tr it (türkçe den italyanca ya çevirir)```\n\n🌀 .antilink \n💘  ```Antilink aracını etkinleştirir.``` \n*⌨️ Örnek:- :* ```.antilink on / off```\n\n🌀 .autobio \n💘  ```Biyografinize canlı saat ekleyin!``` \n*⌨️ Örnek:- :* ```.autobio on / off```\n\n🌀 .detectlang\n💘  ```Yanıtlanan mesajın dilini tahmin eder.``` \n\n🌀 .currency\n\n🌀 .tts \n💘  ```Yazdığınız metini google translate sesine dönüştürür.``` \n\n🌀 .song \n💘  ```Yazdığın şarkıyı yükler.``` \n\n🌀 .video \n💘  ```YouTube dan video indirir.``` \n\n🌀 .yt \n💘  ```Youtubede arama yapar.``` \n\n🌀 .wiki \n💘  ```Wikipedia da arama yapar.``` \n\n🌀 .img \n💘  ```Googlede istediğiniz resimleri arar.``` \n\n🌀 .github \n💘  ```Verilen kullanıcı adından github bilgilerini toplar. \n⌨️ Örnek: .github phaticusthiccy``` \n\n🌀 .lyric \n💘  ```Şarkının sözlerini bulur.``` \n\n🌀 .covid \n💘  ```15 ten fazla ülkenin günlük ve genel covid tablosunu gösterir.``` \n\n🌀 .ss \n💘  ```Verilen bağlantıdaki sayfadan ekran görüntüsü alır.``` \n\n🌀 .ig \n💘  ```Instagram dan kullanıcı bilgilerini getirir``` \n\n🌀 .animesay \n💘  ```Anime kızının tuttuğu afişin içindeki metni yazar``` \n\n🌀 .changesay \n💘  ```Metni fikrimi değiştir posterine dönüştürür.``` \n\n🌀 .trumpsay \n💘  ```Metni Trump ın tweetine dönüştürür.``` \n\n🌀 .spdf \n💘  ```siteyi pdfye dönüştürür``` \n\n🌀 .sticker\n💘  ```Yanıtlanan fotoğrafınızı veya videonuzu çıkartmaya dönüştürür.``` \n\n🌀 .tagadmin\n💘  ```Etiketler grup yöneticileri.``` \n\n🌀 .teklif \n\n🌀 .voice \n💘  ```şarkıyı yada herhangi bir ses dosyasını ses kaydına dönüştürür.``` \n\n🌀 .unvoice\n💘  ```voice ile dönüştürülmüş ses dosyasını eski haline dönüştürür.``` \n\n🌀 .kontrol\n💘  ```Güncelleme olup olmadığını denetler.``` \n\n🌀 .güncelle\n💘  ```Mevcut güncellemeyi yükler.``` \n\n🌀 .vakit \n💘  ```ezan vakitlerini gösterir.``` \n*⌨️ Örnek:- :* ```.vakit <şehir>```\n\n🌀 .vef \n💘  ```Türkçe ses efektlerini gönderir.``` \n\n🌀 .wallpaper\n💘  ```Yüksek çözünürlüklü duvar kağıtları gönderir.``` \n\n🌀 .wame \n💘  ```kişinin sohbet id adresini getirir.``` \n\n🌀 .weather \n💘  ```İstediğiniz konumun hava durumunu gösterir.``` \n\n🌀 .speedtest\n💘  ```Kullandığınız internet sunucusunun indirme ve yükleme hızını ölçer.``` \n\n🌀 .ping\n💘  ```İnternet pinginizi ölçer.``` \n\n🌀 .short \n💘  ```uzun URL bağlantılarını kısaltır.``` \n\n🌀 .calc \n💘  ```Basit bir matematik işlemleri gerçekleştirir (kısaca hesap makinesi).``` \n\n🌀 .whois\n💘  ```Grup yada kişinin verilerini gösterir.```'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '☃️ Filter tetikleyiciler ❄️\n\n\n💿404\n💿Adam ya adam\n💿Adam öldü\n💿Allah allah\n💿Amogus\n💿Arkadaşlar ben gidiyorum\n💿Bak sen\n💿Bakıyorsun öyle\n💿Bane\n💿Bav çiki\n💿Bağırma lan\n💿Bruh\n💿Ehe\n💿Gökte ne var\n💿Hanım hanım\n💿Kurumuş boğazım\n💿Kırmızı şortlu\n💿Ne diyo\n💿Neyi başaramadın\n💿Sağda tükür\n💿Seni hiç alakadar etmez\n💿Seni sürekli\n💿Sikmeseler bari\n💿Supra\n💿Tek kankam\n💿Vay canına\n💿Öyle mi\n💿Şeymi dostum'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: '☃️ Xmedia komutları ❄️\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc: 🇹🇷 Videnun kalitesini artırır.\n\n💻Usage: *.interp*\nℹ️Desc: 🇹🇷 Videonun FPS değerini arttırır.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: 🇹🇷 Ağır çekim olmayan videolara true-slowmo uygular.\n\n💻Usage: *.x4mp4*\nℹ️Desc: 🇹🇷 Video Kalitesini 4 kat düşürür.\n\n💻Usage: *.x2mp4*\nℹ️Desc: 🇹🇷 Video Kalitesini 2 kat düşürür.\n\n💻Usage: *.gif*\nℹ️Desc: 🇹🇷 Videoyu gif’e çevirir.\n\n💻Usage: *.agif*\nℹ️Desc: 🇹🇷 Videoyu sesli gif’e çevirir.\n\n💻Usage: *.mp4blur*\nℹ️Desc: 🇹🇷 Video arka planını bulanıklaştırır.\n\n💻Usage: *.mp4stab*\nℹ️Desc: 🇹🇷 Videonun titreşimini azaltır.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: 🇹🇷 Videoya gökkuşağı efekti uygular.\n\n💻Usage: *.mp4ephi*\nℹ️Desc: 🇹🇷 Videoya rgb değişim efekti uygular.\n\n💻Usage: *.mp4color*\nℹ️Desc: 🇹🇷 Videonun renklerini daha canlı ve çekici yapar.\n\n💻Usage: *.mp4art*\nℹ️Desc: 🇹🇷 Videoya çizim efekti uygular.\n\n💻Usage: *.mp4negative*\nℹ️Desc: 🇹🇷 Videoya negatif renk filtresi uygular.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: 🇹🇷 Videoya nostaji efekti uygular.\n\n💻Usage: *.mp4bw*\nℹ️Desc: 🇹🇷 Videoya monochrome efekti uygular.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: 🇹🇷 Videoyu tersten oynatır.\n\n💻Usage: *.mp4edge*\nℹ️Desc: 🇹🇷 Videoya edge efekti uygular.\n\n💻Usage: *.mp4image*\nℹ️Desc: 🇹🇷 Fotoğrafı 5 saniyelik videoya çevirir.\n\n💻Usage: *.spectrum*\nℹ️Desc: 🇹🇷 Sesin spektrum görüntüsünü video yapar.\n\n💻Usage: *.waves*\nℹ️Desc: 🇹🇷 Sesin dalga aralığını videoya çevirir.\n\n💻Usage: *.frequency*\nℹ️Desc: 🇹🇷 Sesin frekans aralığını videoya çevirir.\n\n💻Usage: *.avec*\nℹ️Desc: 🇹🇷 Sesin farklı bir histogramını videoya çevirir.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: 🇹🇷 Sesin Desibel Değerini Videoya Dönüştürür.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: 🇹🇷 Ses CQT değerini videoya çevirir.\n\n💻Usage: *.mp3eq*\nℹ️Desc: 🇹🇷 Sesi kristal berraklık düzeyinde ayarlar.\n\n💻Usage: *.mp3crusher*\nℹ️Desc: 🇹🇷 Sesi bozar ve gülünç hale getirir.\n\n💻Usage: *.mp3reverse*\nℹ️Desc: 🇹🇷 Sesi Tersen Oynatır.\n\n💻Usage: *.mp3pitch*\nℹ️Desc: 🇹🇷 Sesi inceltir ve hızlandırır.\n\n💻Usage *.mp3low*\nℹ️Desc: 🇹🇷 Sesi kalınlaştırır ve yavaşlatır.\n\n💻Usage: *.x2mp3*\nℹ️Desc: 🇹🇷 Sesi 2 kat hızlandırır.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.'}, type: 1},

      ]
      
      const buttonMessage = {
          contentText: '𝑯𝑬𝒀 𝑼𝑺𝑬𝑹 🧚‍♂️ \n ' + wish + '\n```𝔅𝔬𝔱 İ𝔰𝔪𝔦:``` *'+Config.BOT+'*\n```𝔅𝔬𝔱 𝔖𝔞𝔥𝔦𝔟𝔦:``` *'+Config.OWNER+'*\n\n⏱ 𝔖𝔞𝔞𝔱   : ```' + plk_say + '```\n📅 𝔗𝔞𝔯𝔦𝔥 : ```' + plk_here + '```\n\n☃️ İstediğiniz komut listesini açmak için aşağıdaki butonları kullanın lütfen :)\n', 
          footerText: '✮ Zlose 💕',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
