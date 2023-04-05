module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht in einem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht im selben Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zur Zeit wird keine Musik abgespielt!`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Wiederholungsmodus **deaktiviert** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Wiederholungsmodus **aktiviert** die gesamte Warteschlange wird endlos wiederholt!`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Wiederholungsmodus **deaktiviert** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Wiederholungsmodus **aktiviert** die aktuelle Musik wird endlos wiederholt!`);
            };
        };
    },
};