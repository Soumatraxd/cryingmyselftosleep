const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Replies with pong!',
	usage: '',

	permissions: [],
	ownerOnly: false,
	guildOnly: true,

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),

	error: false,
	execute: ({ interaction }) => {

		interaction.followUp('Pong!');

	},
};
