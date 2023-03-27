module.exports = {
    name: 'debug',
    aliases: ['dbg'],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} ist im **${client.voice.connections.size}** Sprachkanal!`);
    },
};