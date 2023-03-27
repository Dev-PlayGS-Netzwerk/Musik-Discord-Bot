module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Der Bot hat den Kanal verlassen, da der Kanal leer ist!`);
};