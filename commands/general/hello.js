const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'Hello',
	description: 'Greet Ocram.',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Greet Ocram!'),

	error: false,
	execute: ({ interaction }) => {

		interaction.followUp('Shut the fuck up.');

	},
};
