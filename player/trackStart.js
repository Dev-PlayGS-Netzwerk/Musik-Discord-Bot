module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Gerade spielt ${track.title} im ${message.member.voice.channel.name} Kanal...`);
};