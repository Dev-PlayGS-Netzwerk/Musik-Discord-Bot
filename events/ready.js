module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    let statuses = [
        `!help`,
        `https://www.playgs.de`,
        `https://store.playgs.de`,
        `Version: 1.0.0`
    ]
        setInterval(function(){
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: 'STREAMING', url: "https://www.twitch.tv/playgs_netzwerk"}).catch(console.error);
    }, 2500)

    client.user.setActivity(client.config.discord.activity);
};