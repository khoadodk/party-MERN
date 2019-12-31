const express = require('express');
require('./config/db')();

const app = express();

app.use(express.json({ extended: true }));

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/guests', require('./routes/guests'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is starting at port ${PORT}`));
