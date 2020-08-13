const commando = require('discord.js-commando');
const discord = require('discord.js');
const moment = require('moment');
moment.locale('hu')
var client = new commando.Client ({
    owner: '417073375408816128',
    disabledEvryone: true,
    commandPrefix: '%',
    invite: 'https://discord.gg/wUXP5UX',
    unknownCommandResponse: false


});


//:szonikface:
//Rang megjelölés <@& id >

/*
if(message.content.startsWith("%report")){
  message.delete()
  var reportUser = message.mentions.user.frist();
  var grund = message.content.split(' ').slice(2).join(' ');
  var channel = message.member.guild.channels.find("name", "reportok");

  if(reportUser == message.author) return message.channel.send("Válassz ki egy embert!").then(msg => msg.delete(3000))

  let embed = new discord.RichEmbed()
  .setTitle("Report")
  .setColor("RANDOM")
  .setDescription(`${message.author} be reportolta őt: ${reportUser}. \nEzzel az indokkal: ${grund}`)
  channel.send(embed)
}
*/
//Report Chat bot------------------------------------------------------------
/*
if(cmd === `${prefix}report`)
    let toreport = message.guild.member(message.mentions.users.furst() || message.guild.members.get(args[0]));
    if(!toreport) return message.channel.send("Kérlek mond el kit akarsz reportolni!");
    let reportreason = args.join(" ").slice(22);

    let reposrEmbed = new discord.RichEmbed()
    .setDescription("Report")
    .setColor("#15f153")
    .addField("Reportolt felhasználó:", toreport)
    .addField("Reportolta:", message.author.username)
    .addField("Szoba:", message.channel)
    .addField("Idő:", message.createdAt)
    .addField("ok:", reportreason);
    
    message.channel.send("A reportod el lett küldve!");

    let reportschannel = message.guild.channels.find(`name`, 'reportok');
    if(!reportschannel) return message.channel.send("Kérlek csinálj egy report szobát! Köszi puszi!");
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

*/
//Report Chat bot vége-------------------------------------------------------





//Moderáció
/*
client.on("message", message => {
    if (message.author.bot) return;
    if (message.author.id === "417073375408816128") return;
    if (message.author.id === "513735293132603403") return;
    if (message.author.id === "674997482609967116") return;
    if (message.author.id === "393380978766381061") return;

    let szavak = ["csunya", "kurva", "kurva anyád", "gyökér", "cigány", "bazdmeg", "kutya", "anyád", "balfasz", "baszott", "bazd", "fuck", "mother", "shit", "motherfucker", "fasz", "pina", "te retkes idota", "idiota", "faszopó", "köcsög", "bolond", "buzi", "nyomorék", "csicska", "bazd", "bazdmeg", "basz", "baszadék", "nyomo", "anyukád", "maradvány", "Kulák", "picsa"]
    let talalt = false;
 
    for (var a in szavak) {
         if (message.content.toLowerCase().includes(szavak[a].toLowerCase())) talalt = true;
    }
    if (talalt) {
    message.delete();
    console.log("Csunya szót írtXD :: "+message.member.user.tag + " ");
    message.author.send(`Szia! Láttam mit írtál! Szégyeld el magad és többet ne forduljon ilyen elő!!! Mert bajok lesznek!`);
    }
});
*/
//Moderáció vége -------------------------------------------------------

/*

//Kick -----------------------------------------------------------------

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(`${prefix}kick`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Adj meg egy indokot!')
            .then(() => {
              message.reply(`Sikeressen elintézted őt:${user.tag}! (Kick) :smirk:`);
            })
            .catch(err => {
              message.reply('Ez nem fog sikerűlni! :joy: ');
              console.error(err);
            });
        } else {
          message.reply("");
        }
      } else {
        message.reply("Nem jelöltél meg senkit! :no_mouth: ");
      }
    }
  });

//Kick vége ------------------------------------------------------------

//Ban ------------------------------------------------------------------

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(`${prefix}ban`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban('Adj meg egy indokot!')
            .then(() => {
              message.reply(`Sikeressen elintézted őt:${user.tag}! (Ban) :smirk:`);
            })
            .catch(err => {
              message.reply('Ez nem fog sikerűlni! :joy: ');
              console.error(err);
            });
        } else {
          message.reply("");
        }
      } else {
        message.reply("Nem jelöltél meg senkit! :no_mouth: ");
      }
    }
  });


//Ban vége -------------------------------------------------------------
*/


//IDK

//registry
client.registry.registerGroup("parancsok", "Parancsok");
client.registry.registerDefaults();
client.registry.registerGroups([
    ['misc', "misc"]
])
client.registry.registerCommandsIn(__dirname + "/commands");
//registry vége

//IDK vége

/*
//Embeds ---------------------------------------------------------------
client.on("message", message => {
    if (message.content === prefix + "parancsok" ) {
        const embed = new discord.RichEmbed()
        .setThumbnail("http://www.kepfeltoltes.eu/images/2020/04/05/710DSD_logo.png")
        .setTitle('Parancsok!')
        .setColor(3447003)
        .addField("**%Üdv**, Üdvözölheted magad a bottal")
        .addField("**%Szasz**, Üdvözlés :D")
        .setAuthor("Készítette: Szabii")
        .setDiscription(`Parancsot meghívta:${message.author.toString()}`)
        message.channel.send(embed);
    }
});

//Embedss --------------------------------------------------------------
*/

let prefix = "%"

//Üdvözlő ---------------------------------------------------------------
client.on("message", message => {
  if (message.content.startsWith(prefix + "szia")) {
      message.channel.send(`Csáó ${message.author.toString()}! Az én nevem **SSM Bot**!`)
      message.channel.send("Köszöntelek itt a szerveren. Érezd jól magad!")
      message.channel.send(`Ajánlatos a **%parancsok**- nevű commandot használnod így elsőnek!`)
      message.channel.send(`Majd még a jövőbe találkozunk Szia!`)
      message.react('🔧')

  }
});

//Üdvözlő vége ----------------------------------------------------------

//Parancsok ---------------------------------------------------------------


//Parancsok vége ----------------------------------------------------------

//Indulooo ---------------------------------------------------------------
client.on("ready", () => {
    console.log(".");
    client.user.setActivity("📈The Chat📉", {type: "WATCHING"});
});
//Státusz jelzés ---------------------------------------------------------

let activNum = 0;

  setInterval(function() {
   if (activNum ===0) {
      client.user.setActivity("🔵 SSM Family", {type: "WATCHING"});
      activNum = 1;
    } else if (activNum === 1) {
      client.user.setActivity("🔴 SSM Family", {type: "WATCHING"});
      activNum = 0;
    }
  }, 3* 1000);


client.login(process.env.token)
//Státusz jelzés vége ----------------------------------------------------
//client.user.setActivity("🔵 The Chat 🔴", {type: "WATCHING"});
//Indulo Vége ------------------------------------------------------------


client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'parancsok') {
    const embed = new discord.RichEmbed()
        .setThumbnail("https://mir-s3-cdn-cf.behance.net/project_modules/fs/306edf34316935.571407b5eec44.gif")
        .setTitle('Parancs lista :')
        .setColor('#25C675')
        .addField("**%szia**", "Első üdvözlés a bothoz.")
        .addField("**%avatar**", "Megmutatja az avatárodat!")
        .addField("**%idő**", "Meg mutatja a pontos időt.")
        .addField("**%botinfo**", "A Bot információjának lekérése.")
        .addField("**%szerverinfo**", "A szerver információjának lekérése.")
        .addField("A parancsot használta:",`${message.author.toString()}`) 
        message.channel.send(embed).then(async msg => {
          message.delete();
          return;})
          }
        });
/*
//Szabályzat------------------------------------------------------------------------------
  client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'szabályzat') {
      const embed = new discord.RichEmbed()
        .setThumbnail("http://www.kepfeltoltes.eu/images/2020/04/05/710DSD_logo.png")
        .setColor(3447003)
        .addField("°", "** Ne hirdess! (Discord szerver, TeamSpeak szerver, Egyéb szerverek, Youtube videó/live)**")
        .addField("°", "** Ne káromkodj!**")
        .addField("°", "** Ne szidj senkit sem!**")
        .addField("°", "** Ne provokálj másokat/kéregess!**")
        .addField("°", "** Ne floodolj/spamelj! (Max 2-szer írj ki valamit!)**")
        .addField("°", "** Maximum 5 emoji!**")
        .addField("°", "** Tilos a szoba jump! (Szobáról szobára lépkedni)**")
        .addField("°", "** Tilos 18+ tartalmú képeket feltölteni!**")
        .addField("°", "** Tilos Olyan zenét hallgatni, nyilvános csatornában, amely trágár szavakat, +18-as tartalmat von magába.**")
        .addField("°", "⛔ Némítórendszerünk:")
        .addField("°", "** Káromkodás/flood: 45 perc mute!**")
        .addField("°", "** Sértegetés/szidás: 2 óra mute! (Többszörös megszegés után 2 nap némítás!)**")
        .addField("°", "** Kéregetés (rang): 20 perc némítás!**")
        .addField("°", "** Fenyegetés: 30 perc némítás!**")
        .addField("°", "** Provokálás: 20 perc némítás!**")
        .addField("°", "⛔ Tiltórendszerünk:")
        .addField("°", "** Discord szerveren tartózkodó személyek szidása: Szerverről való tiltás!**")
        .addField("°", "** Hirdetés: Szerverről való tiltás!**")
        .addField("°", "** Zaklatás: Szerverről való tiltás!**")
        .addField("°", "** A szabályok betartása minden személyre vonatkozik! Amennyiben nem tartod be ezen szabályokat, akkor az következményeket von maga után! A szabályok módosításának lehetősége fent áll!**")
        .setAuthor("Készítette: 𝕊𝕫𝕒𝕓𝕚𝕚 ♛#3656")
      message.channel.send(embed);
    }
  });
//Szabályzat------------------------------------------------------------------
  */

//Képek-----------------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'rip') {
    const embed = new discord.RichEmbed()
      .setImage("https://kerdezdmeg.hu/wp-content/uploads/2019/02/rip.png")
      .setColor("RANDOM")
      message.channel.send(embed).then(async msg => {
        message.delete();
        return;})
        }
      });

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'version') {
    const embed = new discord.RichEmbed()
     .setThumbnail("https://thumbs.gfycat.com/FrigidBlueGraywolf-small.gif") 
     .addField("v1.0","**A Bot létrejött!**")
     .addField("v2.0","**Trágár beszéd érzékelése, törlése!**")
     .addField("v3.0","**Titkosított információ!**")
     .addField("v3.1","**Parancsra képeket hoz létre!**")
     .addField("v3.2","**Parancsra bárki avatár képét megmutatja!**")
     .addField("v3.3","**Megmutatja a pontos időt, dátumot**")
     .addField("v4.0","**Bot, szerver információk lekérése**")
     .addField("v4.1","**Help parancs létrejötte**")
     .addField("v4.2","**Adminok mutatása**")
     .addField("A parancsot használta:",`${message.author.toString()}`) 
     .setColor("#25C675")
    message.channel.send(embed).then(async msg => {
      message.delete();
      return;})
      }
    });



  client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gg') {
      const embed = new discord.RichEmbed()
      .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPpKhIvEz0Fy6hm9twZGvvQteHQPficcibqhJ-06jZnCa6qrNg&usqp=CAU")
      .setColor("RANDOM")
        message.channel.send(embed).then(async msg => {
          message.delete();
          return;})
          }
        });

//Képek vége -----------------------------------------------------------------

  //Szerver stat------------------------------------------------------------

  /*

  client.on("ready", () => {
    let time = new Date();
    client.user.setActivity("");
    let myGuild = client.guilds.get('676231170194669579')
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('711214863258484767');
    memberCountChannel.setName('📈📉Tagok📉📈 :: ' + memberCount)
});

client.on("guildMemberAdd", member => {
    let myGuild = client.guilds.get('676231170194669579')
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('711214881503969371');
    memberCountChannel.setName('📈📈Tagok📈📈 :: ' + memberCount)
});

client.on("guildMemberRemove", member => {
    let myGuild = client.guilds.get("676231170194669579")
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('711214899707248684');
    memberCountChannel.setName('📉📉Tagok📉📉 :: ' + memberCount)
});

*/


client.on("message", message => {
  if (message.content === prefix + "idő") {
    const timee = new discord.RichEmbed()
    .setTitle(moment().format('YYYY, MMMM, DD'))
    .addField("Itt a pontos idő: ", moment().format('LTS'))
    .addField("A parancsot használta:",`${message.author.toString()}`) 
    message.channel.send(timee).then(async msg => {
      await msg.react("🕙");
      message.delete();
      return;})
      }
    });

/*
   
setInterval(function(){ 
  client.channels.get("711198313801711616").setName(`🕙│Idő: ${moment().format('LT')}`)
}, 60*1000);

*/
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'hétfőkeddjátékok') {
    const embed = new discord.RichEmbed()
     .setThumbnail("https://thumbs.gfycat.com/FrigidBlueGraywolf-small.gif")
     .setTitle('Hetfő Keddi játékok :') 
     .addField(":one:","**CS:GO https://www.youtube.com/watch?v=edYCtaNueQY&t=147s**")
     .addField(":two:","**Valorant https://www.youtube.com/watch?v=e_E9W2vsRbQ**")
     .addField(":three:","**R6 https://www.youtube.com/watch?v=KlbLLRdg9u8&t=57s**")
     .setColor("#25C675")
     message.channel.send(embed).then(async msg => {
      await msg.react("1️⃣");
      await msg.react("2️⃣");
      await msg.react("3️⃣");
      message.delete();
      return;})
      }
    });

    client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'szombatvasárnapjátékok') {
        const embed = new discord.RichEmbed()
        .setTitle('Horror hétvége játékok :')
         .setThumbnail("https://thumbs.gfycat.com/FrigidBlueGraywolf-small.gif") 
         .addField(":one:","**HELLBLADE https://www.youtube.com/watch?v=PRQgOfb9EGc**")
         .addField(":two:","**Observer https://www.youtube.com/watch?v=c3xSyjKA4iQ**")
         .addField(":three:","**ALIEN Isolation https://www.youtube.com/watch?v=7h0cgmvIrZw**")
         .addField(":three:","**Amnesia https://www.youtube.com/watch?v=u1nY_5-UrY4**")
         .addField(":five:","**Agony +18! https://www.youtube.com/watch?v=iwinHf6H-Mo**")
         .setColor("#831f18")
message.channel.send(embed).then(async msg => {
      await msg.react("1️⃣");
      await msg.react("2️⃣");
      await msg.react("3️⃣");
      message.delete();
      return;})
      }
    });
/*
        client.on("message", message =>{
          if (message.content.startsWith(prefix + "16tonna")) {
            message.channel.send(`

            ** 16 tonna fekete szén - Republic **

            **Aki most lent van a föld alatt.
            Aki most lent van, lent is marad.
            Aki most fent jár, a föld felett.
            Örül nagyon, hogy ott lehet.

            16 tonna fekete szén.
            16 tonnát raksz és mennyi a bér?
            Meghalni kéne, de nem lehet.
            A vállalat nem engedi a lelkemet.
            
            Kedvesem, jöjj velem!
            Ez a harc lesz a végsQ.
            Kedvesem, jöjj velem!
            Senki más nem jöhet.
            Kedvesem, jöjj velem!
            Az égbe visz ez a lépcsQ.
            Innen más út ki már
            Nem vezet.

            Ma szombat este indul a party
            A malacnak reggel ki fog enni adni?
            A színpadon három majom.
            Hülyének néznek minket, azt gondolom.

            Kedvesem, jöjj velem!
            Ez a harc lesz a végsQ.
            Kedvesem, jöjj velem!
            Senki más nem jöhet.
            Kedvesem, jöjj velem!
            Az égbe visz ez a lépcsQ.
            Innen más út ki már
            Nem vezet.

            Aki most lent van a föld alatt.
            Aki most lent van, lent is marad.…**`)
            message.react('⛰️');
          }
        })

client.on("message", message => {
  if (message.content.startsWith(prefix + "szonik")) {
      message.channel.send(`Szia Szonik! Én vagyok a "Rendfenntartó" bot :D Valami kismadár mondta hogy Twitchen meglett a 100 követő! Gratulálok neked! Ez egy szép kis mérföldkő és így tovább. A kitartásod és a pozitivitásod nagyon nagy és köszönünk neked mindent amit értünk teszel, az a sok munka amit bele ölsz az egészbe elképesztő! Még egyszer gratulálok és így tovább! :) `)
  }
});
*/
/*
▶️ ⏸️

🔴 The Chat 🔵
*/
console.log("Töltés: 0%");
console.log("10%");
console.log("20%");
console.log("30%");
console.log("40%");
console.log("50%");
console.log("60%");
console.log("70%");
console.log("80%");
console.log("90%");
console.log("100%");
console.log("Mostmár készen áll a bot a használatra!");


client.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}createtext`)) {
    const args = message.content.slice(13);
    message.guild.createChannel(`${args}`).then(channel => {
      channel.setTopic(`${message.author.toString()}Szobálya!`)
      console.log(`(${message.author.tag}) Létre hozta ezt a szobát: [${args}]`)
    })
  }
});

//Create Channel

//Create Channel

const szinek = require("./colours.json")
const emo = require("./emoji.json")

client.on(`message`, async message => {
  if (message.content.toLowerCase().startsWith(`${prefix}createvoice`)) {
    const args = message.content.slice(13);
    message.guild.createChannel(`${args}`, `voice`).then(channel => {
      channel.setTopic(`${message.author.toString()}Szobálya!`)
      console.log(`(${message.author.tag}) Létre hozta ezt a szobát: [${args}]`)
    })
  }
});


let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channel.get("676429313158938638").send (x.join(" "));
});



//Szerverinfó------------------------------------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'szerverinfo') {
const serverembed = new discord.RichEmbed()
.setTitle("Szerver információ")
.setColor("#25C675")
.setThumbnail("https://mir-s3-cdn-cf.behance.net/project_modules/fs/306edf34316935.571407b5eec44.gif")
.addField("Szerver név:",`${message.guild.name} (${message.guild.nameAcronym})`, true)
.addField("Szerver tulajdonos:", message.guild.owner.user.tag, true)
.addField("Regio:", message.guild.region)
.addField("Létszám:", message.guild.memberCount)
.addField("A parancsot használta:",`${message.author.toString()}`) 
message.channel.send(serverembed).then(async msg => {
  message.delete();
  return;})
  }
});


//Szerverinfó vége --------------------------------------------------------------------------------------

//igaz hamis
client.on("message", message => {
  if (message.content.toLowerCase().startsWith("ih")) {
      number = 3;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
      switch (random) {
        case 1: message.channel.send ("Igaz"); break;
        case 2: message.channel.send ("Hamis"); break;
        case 3: message.channel.send ("Nem tudom"); break;
      }
     }
    });
  //igaz hamis

//Botinfó------------------------------------------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'botinfo') {
const botembed = new discord.RichEmbed()
.setTitle("Bot információ")
.setColor("#25C675")
.setThumbnail("https://mir-s3-cdn-cf.behance.net/project_modules/fs/306edf34316935.571407b5eec44.gif")
.addField("Bot név:", client.user.username)
.addField("Bot létrehozásának a napja:", moment(client.user.createdAt).format('YYYY. MMMM. DD. LTS'))
.addField("Szerverek:", client.guilds.size)
.addField("A parancsot használta:",`${message.author.toString()}`) 
message.channel.send(botembed).then(async msg => {
  message.delete();
  return;})
  }
});

//Botinfó vége-------------------------------------------------------------------------------------------
/*
client.channel.get

message.guild.channels.find("id", "szobaid")
*/
/*
client.on("message", message => {
  let szoba = message.guild.channels.find("id", "710288346382860368")
  if (message.content.toLowerCase().startsWith(prefix + "helpme")) {
      szoba.send(` ${message.author.toString()}-nek/nak segítségre van szüksége!!! A parancs ekkor lett használva: ${moment().format('LLL')}`)
  }
});
*/
//Report-----------------------------------------------------------------------------------------------------

/*
client.on("message", async message => {
if (message.author.client) return;
if (message.channel.type === "dm")return;
let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  if (cmd === prefix + "report") {
    let 
    let
  let reportlog = message.guild.channels.find(channel => channel.name === 'reportlog')
  const modEmbed = new discord.RichEmbed()
  .setTitle("Report Info")
  .setColor(szinek.világos_piros)
  .addField("reportolt személy: ", `none`)
  .addField("Indok: ", `None`)
  .addField("Küldte: ", `none`)
  reportlog.send(modEmbed)
  }
});
*/
//meghívó



//meghívó
//Links



/*
    client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'links2.0') {
        const embed = new discord.RichEmbed()
         .setThumbnail("https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/343_Twitch_logo-128.png")
         .setTitle('SzonikGames: ') 
         .addField("<:twitch:721387425032700065> Twitch ","**https://www.twitch.tv/szonikgames**")
         .setColor("#a503fc")
         message.channel.send(embed).then(async msg => {
          message.delete();
          return;})
          }
        });

        client.on("message", message => {
          if (message.content.toLowerCase() === prefix + 'links2.0') {
            const embed = new discord.RichEmbed()
             .setThumbnail("https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png")
             .setTitle('SzonikGames: ') 
             .addField("<:fb:721387253204516894> Facebook ","**https://www.facebook.com/SzonikGames-111255530255105/**")
             .setColor("#3766bd")
             message.channel.send(embed).then(async msg => {
            
              return;})
              }
            });
            
            client.on("message", message => {
              if (message.content.toLowerCase() === prefix + 'links2.0') {
                const embed = new discord.RichEmbed()
                 .setThumbnail("https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png")
                 .setTitle('SzonikGames: ') 
                 .addField("<:yt:721387281981636668> Youtube ","**https://www.youtube.com/channel/UCis7Z93ofv4GO5ki2KeS8-Q/featured**")
                 .setColor("#ab2e2e")
                 message.channel.send(embed).then(async msg => {
                  await msg.react("❤️");
                  return;})
                  }
                });
    
*/

//Links


//Event-------------------------------------------------------------------------------------------------------------------------------
    client.on("message", message => {
      if (message.content.toLowerCase() === prefix + 'valamikellideisxd') {
        const embed = new discord.RichEmbed()
        .setTitle('Event szavazás:')
         .setThumbnail("https://thumbs.gfycat.com/FrigidBlueGraywolf-small.gif") 
         .addField(":one:","**Rejtvényfejtő**")
         .addField(":two:","**Kitalálós**")
         .addField(":three:","**Keresős**")
         .addField(":four:","**Számolós**")
         .addField("Event szervező:",`${message.author.toString()}`) 
         .setColor("#33a1ee")
message.channel.send(embed).then(async msg => {
      message.delete();
      await msg.react("1️⃣");
      await msg.react("2️⃣");
      await msg.react("3️⃣");
      await msg.react("4️⃣");
      return;})
      }
    });
//Event vége---------------------------------------------------------------------------------------------------------------------------

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'lootbox') {
    const embed = new discord.RichEmbed()
    .setTitle('100 Lootbox nyitás OW: ')
     .setThumbnail("https://thumbs.gfycat.com/FrigidBlueGraywolf-small.gif") 
     .addField(":one:","**Igen**")
     .addField(":two:","**Nem**")
     .addField(":three:","**Szívj el egy cigit oszt nyomassad!!!!!!**")
     .setColor("#33a1ee")
message.channel.send(embed).then(async msg => {
  message.delete();
  await msg.react("1️⃣");
  await msg.react("2️⃣");
  await msg.react("3️⃣");
  return;})
  }
});

//https://media.giphy.com/media/xUOxf2xydOdi4wfxPq/giphy.gif
//https://i.pinimg.com/originals/cc/52/96/cc5296f667530d51321ba2f8e44ba901.gif
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'goodnight') {
    const embed = new discord.RichEmbed()
    .setTitle('Jó éjszakát')
     .setThumbnail("https://media.giphy.com/media/xUOxf2xydOdi4wfxPq/giphy.gif") 
     .addField("**🌑**",`${message.author.toString()}`)
message.channel.send(embed).then(async msg => {
  message.delete();
  await msg.react("🌑");
  return;})
  }
});

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'goodmorning') {
    const embed = new discord.RichEmbed()
    .setTitle('Jó reggelt')
     .setThumbnail("https://media.giphy.com/media/3ohze3Etu7mUfkHkI0/giphy.gif") 
     .addField("**🌞**",`${message.author.toString()}`)
message.channel.send(embed).then(async msg => {
  message.delete();
  await msg.react("🌞");
  return;})
  }
});

//Event kérdések
