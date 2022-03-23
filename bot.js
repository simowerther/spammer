const Discord = require("discord.js")
const client = new Discord.Client() 
const request = require('request')
const config = require("./config.json")

// selam ben simowerther
    client.on("ready", () => {
        client.user.setPresence({ activity: { name: config.durum }, status: "dnd" });
        client.channels.cache.get(config.voicekanal).join().catch(x => x)
         const guild = client.guilds.cache.get(config.sunucu)
           console.log(`Lauther "${config.vanity}" urlsini guardlamaya başladı.`)


    setInterval(async () => {
        if(guild.vanityURLCode == config.vanity) {// simowerther
            let onay = new Discord.MessageEmbed().setAuthor(guild.name, guild.iconURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(` \`${config.vanity}\``)
                let kanal = await guild.channels.cache.get(config.urllog)// simowerther
                     await kanal.send(onay)
                        await kanal.send(`<@${config.botOwner}>`)// simowerther


    console.log(`${guild.name} = "${guild.vanityURLCode}" Durum: ♥`) 
        console.log(`bastim q.`)// simowerther
            process.exit()
                } else {// simowerther
                    simowerther(config.vanity, config.guild, config.token)
                         }}, 1*500)})// simowerther

    async function simowerther(vanity, token) {
        const spammer = {//simowerther
            url: `https://discord.com/api/v8/guilds/${config.sunucu}/vanity-url`,
                body: {
                    code: `${vanity}`},
    json: true,
        method: 'PATCH',
            headers: {//simowerther
                "Authorization": `Bot ${config.token}`
                    }
                        };

    request(spammer, (err, res, body) => {
        if (err) {//simowerther
            return console.log(err)}})}


client.login(config.token).catch(err => { console.log("Token yanlış amk !")})
