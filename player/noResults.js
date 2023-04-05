module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Keine Ergebnisse auf YouTube gefunden für ${query} !`);
};