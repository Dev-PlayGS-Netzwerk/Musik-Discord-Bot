module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachkanal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du bist nicht in dem selben Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Momentan spielt keine Musik!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Copyright © 2021 PlayGS Netzwerk | Alle rechte vorbehalten.' },
                fields: [
                    { name: 'Kanal', value: track.author, inline: true },
                    { name: 'Angefragt von', value: track.requestedBy.username, inline: true },
                    { name: 'Von Playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Zuschauer', value: track.views, inline: true },
                    { name: 'Länge', value: track.duration, inline: true },
                    { name: 'Filter aktiviert', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Lautstärke', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Wiederholungs Modus', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Gerade pausiert', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Spielzeit', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};