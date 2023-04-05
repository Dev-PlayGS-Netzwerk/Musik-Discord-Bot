module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht in einem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht im selben Sprachkanal!`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zur Zeit werden keine Songs abgespielt!`);

        message.channel.send(`**Server-Warteschlange - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(Wiederholung)' : ''}**\nAktuell : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Und **${queue.tracks.length - 5}** andere Lieder...` : `In der Playlist **${queue.tracks.length}** Titel...`}`));
    },
};