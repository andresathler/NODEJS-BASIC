const express = require('express');
const bodyParser = require('body-parser')
const path = require("path");

const  app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFoundRoutes = require('./routes/not_found');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(notFoundRoutes);



app.listen(3000);
