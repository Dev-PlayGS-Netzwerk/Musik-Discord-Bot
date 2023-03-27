module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du bist nicht in einem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du bist nicht im selben Sprachkanal wie ich!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Momentan spielt keine Musik!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Es ist gerade nur 1 Song in der Warteschlange.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Die Warteschlange wurde **gelöscht** !`);
    },
};