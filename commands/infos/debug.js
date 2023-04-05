module.exports = {
    name: 'debug',
    aliases: ['dbg'],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} verbunden in **${client.voice.connections.size}** Kanälen!`);
    },
};