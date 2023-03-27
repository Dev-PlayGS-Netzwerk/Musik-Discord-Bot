module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Ich wurde nicht fündig auf YouTube mit ${query} !`);
};