const { Collection } = require('discord.js');
const fs = require('fs');


module.exports = {
	name: 'ready',
	once: true,

	execute: async (client) => {

		console.log(`${client.user.tag} has awakened!`);

		/* Set client status */
		client.on('ready', () => {
			client.user.setStatus('idle')
			client.user.setPresence({
				game: {
					name: 'with peoples feelings.',
					type: "PLAYING",
				}
			});
		});

		/* Registering slash commands */
		client.commands = new Collection();
		const data = [];
		// Command handler
		const categories = fs.readdirSync(`${__dirname}/../commands/`);
		for (const category of categories) {
			const commandFiles = fs.readdirSync(`${__dirname}/../commands/${category}`).filter(file => file.endsWith('.js'));
			for (const file of commandFiles) {

				const command = require(`${__dirname}/../commands/${category}/${file}`);
				client.commands.set(command.name, command);
				data.push(command.data.toJSON());

			}
		}

		/* Set ApplicationCommand data */
		await client.application.commands.set(data);

	},
};
