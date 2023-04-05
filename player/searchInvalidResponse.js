module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Die Auswahl wurde **abgebrochen** !`);
    } else message.channel.send(`${client.emotes.error} - Du musst eine existierende Zahl zwischen **1** und **${tracks.length}** auswählen !`);
};