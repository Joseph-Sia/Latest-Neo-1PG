const { Client, Intents } = require('discord.js');
const mongoose = require('mongoose');
const config = require('./config.json');

mongoose.connect(config.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => (err)
    ? console.log('Failed to connect to db')
    : console.log('Connected to db'));

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.login(config.bot.token);

require('./handlers/event-handler')(bot);
require('./dashboard/server')