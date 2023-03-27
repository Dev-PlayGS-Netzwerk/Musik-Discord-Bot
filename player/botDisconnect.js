module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musik hat gestoppt und dadurch hat der Bot den Kanal verlassen!`);
};