module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** ! \n${client.emotes.gem} - **${client.guilds.cache.size}** servers, für **${client.users.cache.size}** Benutzer. \n${client.emotes.gift} - Ich sage danke!`);
    },
};