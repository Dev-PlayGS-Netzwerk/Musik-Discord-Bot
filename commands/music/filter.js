module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht in einem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Sie befinden sich nicht im selben Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zur Zeit wird keine Musik abgespielt!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Bitte geben Sie einen gültigen Filter zum Aktivieren oder Deaktivieren an!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Diesen Filter gibt es nicht, versuchen Sie es zum Beispiel (8D, Vibrato, Pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Ich füge den Filter zur Musik hinzu, bitte warten Sie ... Hinweis: Je länger die Musik ist, desto länger dauert es.`);
        else message.channel.send(`${client.emotes.music} - Ich deaktiviere den Filter für die Musik, bitte warten Sie ... Hinweis: Je länger die Musik abgespielt wird, desto länger dauert es.`);
    },
};