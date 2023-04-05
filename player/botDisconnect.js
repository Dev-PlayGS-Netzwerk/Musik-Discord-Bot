module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Die Musik hörte auf, da ich vom Kanal getrennt wurde!`);
};