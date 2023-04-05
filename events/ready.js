module.exports = async (client) => {
    console.log(`Eingeloggt als ${client.user.username}. Bereit auf ${client.guilds.cache.size} Servern, für insgesamt ${client.users.cache.size} Benutzer`);

    let statuses = [
        `-help`,
        `https://www.playgs.de`,
        `Version: 1.0.1`,
        `Copyright © PlayGS Netzwerk`
    ]
        setInterval(function(){
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: 'STREAMING', url: "https://www.twitch.tv/playgs_netzwerk"}).catch(console.error);
    }, 2500)

    client.user.setActivity(client.config.discord.activity);
};