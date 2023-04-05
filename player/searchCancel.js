module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Sie haben keine gültige Antwort gegeben ... Bitte senden Sie den Befehl erneut !`);
};