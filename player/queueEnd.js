module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Die Musik wurde gestoppt, da sich keine Musik mehr in der Warteschlange befindet!`);
};