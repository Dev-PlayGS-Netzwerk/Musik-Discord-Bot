module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Du hast etwas nicht existierendes ausprobiert... Bitte sende das Kommando erneut!`);
};