const client = new Discord.Client({partials : ["MESSAGE", "CHANNEL", "REACTION"]});







client.on('messageReactionAdd', async(reaction, user) => {







 if(reaction.message.partial) await reaction.message.fetch();







 if(user.bot) return;



 if(!reaction.message.guild) return;







 if(reaction.message.id === 'MESSAGE_ID') {



   if(reaction.emoji.name === 'EMOJI') {



     await reaction.message.guild.members.cache.get(user.id).roles.add('ROLE_ID')



   }



 }



})



















client.on('messageReactionRemove', async(reaction, user) => {







 if(reaction.message.partial) await reaction.message.fetch();







 if(user.bot) return;



 if(!reaction.message.guild) return;







 if(reaction.message.id === 'MESSAGE_ID') {



   if(reaction.emoji.name === 'EMOJI') {



     await reaction.message.guild.members.cache.get(user.id).roles.remove('ROLE_ID')



   }



 }









})
