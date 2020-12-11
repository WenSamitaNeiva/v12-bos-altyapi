const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => { //Buraya kodlar girilecek

};

exports.conf = {
  enabled: true,  // komut aktif mi değil mi
  guildOnly: false,  //komut sadece sunucular için mi aktif
  aliases: [''], //diğer kullanım şekilleri
  permLevel: 0 //permlevellar bot.js ve message.js de belirtilmiştir
};

exports.help = {
  name: '', //komut ismi, komut girerken lazım olacak
  description: '', //komut açıklaması
  category: '', //komut kategorisi
  usage: '' //kullanım bilgisi
};
