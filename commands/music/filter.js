module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachkanal!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Du bist nicht in dem selben Sprachkanal!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Momentan spielt keine Musik!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Bitte spezifiziere dich bei den Filtern welchen du aktivieren oder deaktivieren möchtest!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Dieser Filter existiert nicht, versuche einen dieser Filter (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Der angeforderte Filter wird **hinzugefügt**, bitte warte... Notiz : um so länger der Song ist, desto länger dauert es den Filter drüber zu spielen.`);
        else message.channel.send(`${client.emotes.music} - Der angeforderte Filter wird **entfernt**, bitte warte... Notiz : um so länger der Song ist, desto länger dauert es den Filter drüber zu spielen.`);
    },
};