module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Spielt gerade ${track.title} im ${message.member.voice.channel.name} Sprachkanal ...`);
};