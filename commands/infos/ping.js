module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** ! \n${client.emotes.gem} - **${client.guilds.cache.size}** Server, für **${client.users.cache.size}** Benutzer.`);
    },
};