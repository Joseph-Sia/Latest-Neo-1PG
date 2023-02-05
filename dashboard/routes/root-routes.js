const express = require('express') //use the package
const { commands } = require('../../handlers/command-handler');

const router = express.Router()

router.get('/', (req, res) => res.render('index'))
router.get('/commands', (req, res) => res.render('command', {
    subtitle: 'Commands',
    categories: [
        {name: 'Auto Mode' , icon: 'fa fa-gavel'},
        {name: 'Economy' , icon: 'fa fa-database'},
        {name: 'General' , icon: 'fa fa-star'},
        {name: 'Music' , icon: 'fa fa-music'}
    ],
    commands: Array.from(commands.values()),
    commandsString: JSON.stringify(Array.from(commands.values()))
}));

module.exports = router;