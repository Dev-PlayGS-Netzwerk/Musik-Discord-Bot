module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Die Musik wurde gestoppt, da kein Mitglied mehr im Sprachkanal vorhanden ist!`);
};