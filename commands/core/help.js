module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: 'PlayGS Netzwerk' },
                    footer: { text: 'Copyright © 2022 PlayGS Netzwerk | Alle rechte vorbehalten.' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Musik', value: music },
                        { name: 'Filter', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `So verwenden Sie Filter, ${client.config.discord.prefix}filter (der filter). Example : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Ich habe diesen Befehl nicht gefunden!`);

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: 'PlayGS Netzwerk' },
                    footer: { text: 'Copyright © 2022 PlayGS Netzwerk | Alle rechte vorbehalten.' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Kategorie', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Verwendungszweck', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Hier finden Sie Informationen zum bereitgestellten Befehl.\nObligatorische Argumente `[]`, Optionale Argumente `<>`.',
                }
            });
        };
    },
};