const Discord = require('discord.js');
const client = new Discord.Client();
const day = 86400000;

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
  // If the message is "ping"
  if (message.channel.name === 'member-approval') {
	await message.react('👍');
	await message.react('👎');
	var reacts = message.reactions;
	var ups = 0;
	var downs = 0;
	const reactions = message.awaitReactions(reaction => {
		if (reaction.emoji.name === '👍') {
			ups = reaction.count
		};
		if (reaction.emoji.name === '👎') {
			downs = reaction.count
		};
	}, day);
	setTimeout(function(){
		if (ups > downs){
			console.log('approve');
		};
		if (ups < downs){
			console.log('deny');
		};
		if (ups === downs){
			console.log('deny')
		};
	}, day);
  };
  if (message.channel.name === 'polls') {
	await message.react('👍');
	await message.react('👎');
  };
  if (message.channel.name ==='refresher') {
	  if (message.author.username === 'Jennifer Ryman') {
		  message.channel.send("refresh")
		setInterval(function(){
			message.channel.send("refresh")
		},280000);
	  }
  };
});


client.login('NDY4MDkxNzgzMzc3NTg0MTI4.Di5P3g._5JV4N2KKypg2kjaL0tRW9yTj0Y');

