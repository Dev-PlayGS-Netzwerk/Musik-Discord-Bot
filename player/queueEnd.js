module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Die Musik wurde gestoppt, da keine Musik mehr in der Warteschlange ist!`);
};