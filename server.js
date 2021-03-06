const express = require('express');
const app = express();

const loginRouter = require('./routes/login.route');
const registerRouter = require('./routes/register.route');

const port = 3000;

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('mainPage');
});

app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.listen(port, () => console.log('server starting...'));