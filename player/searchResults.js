module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Hier sind deine Resultate von der Suche ${query}` },
            footer: { text: 'Copyright © 2023 PlayGS Netzwerk | Alle rechte vorbehalten.' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};