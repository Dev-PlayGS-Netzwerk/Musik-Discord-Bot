module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht in einem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht im selben Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zur Zeit wird keine Musik abgespielt!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Copyright © 2022 PlayGS Netzwerk | Alle rechte vorbehalten.' },
                fields: [
                    { name: 'Kanal', value: track.author, inline: true },
                    { name: 'Gewünscht von', value: track.requestedBy.username, inline: true },
                    { name: 'Aus der Wiedergabeliste', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Ansichten', value: track.views, inline: true },
                    { name: 'Dauer', value: track.duration, inline: true },
                    { name: 'Filter aktiviert', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Lautstärke', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Wiederholungsmodus', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Derzeit pausiert', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Fortschrittsbalken', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};