module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} wurde der Warteschlange hinzugefügt (**${playlist.tracks.length}** Titel) !`);
};