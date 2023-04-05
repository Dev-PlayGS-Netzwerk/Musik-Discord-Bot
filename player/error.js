module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Auf diesem Server wird keine Musik abgespielt!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Sie sind in keinem Sprachkanal verbunden!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ich bin nicht in der Lage, Ihrem Sprachkanal beizutreten, bitte überprüfen Sie meine Berechtigungen!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} ist in Ihrem Land nicht verfügbar! Überspringen...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Die Musik fängt an... Bitte warten Sie und versuchen Sie es erneut!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Irgendetwas ist schief gelaufen ... Fehler : ${error}`);
    };
};
