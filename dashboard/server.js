const cookies = require('cookies');
const express = require('express') //use the package

const authRoutes = require('./routes/auth-routes')
const rootRoutes = require('./routes/root-routes')

const app = express()

// this is to be able to use assets such CSS/JS
app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

__dirname; //directory name
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(cookies.express(''));

app.use('/', rootRoutes, authRoutes);

app.get('*', (req, res) => res.render);

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Service is live on port ${port}`));
