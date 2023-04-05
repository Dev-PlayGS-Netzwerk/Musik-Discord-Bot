module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht in einem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht im selben Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zur Zeit wird keine Musik abgespielt!`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Bitte geben Sie eine gültige Nummer ein!`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Bitte geben Sie eine gültige Nummer ein (zwischen 1 und 100) !`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Lautstärke eingestellt auf **${parseInt(args[0])}%** !`);
    },
};