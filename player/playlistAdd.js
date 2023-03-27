module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} wurde hinzugefügt zur Warteschlange, nun sind es (**${playlist.tracks.length}** songs) !`);
};