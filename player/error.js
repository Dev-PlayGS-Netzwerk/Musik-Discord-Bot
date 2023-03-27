module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Es wird keine Musik mehr auf dem Server gespielt!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Du bist in keinem Sprachkanal!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ich kann dem Kanal nicht beitreten, bitte prüfe meine Rechte!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} ist nicht verfügbar in deinem Land! Überspringen...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Die Musik startet... Bitte warte und versuche es erneut!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Etwas ist schief gelaufen... Fehler : ${error}`);
    };
};
