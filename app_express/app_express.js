// Import
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import htmlExpress, { staticIndexHandler } from 'html-express-js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Init
let app_express = new express();
let __dirname = dirname(fileURLToPath(import.meta.url));

let dir_view = `${__dirname}/view`;
let dir_public = `${__dirname}/public`;

// Middleware
app_express.use(helmet());
app_express.use(morgan('common'));

// Setup - Config
// set up engine
app_express.engine('js', htmlExpress({ includesDir: 'includes' }));
// use engine
app_express.set('view engine', 'js');
// set directory where all index.js pages are served
app_express.set('views', dir_view);
// serve all other static files like CSS, images, etc
app_express.use(express.static(dir_public));
// root views directory to serve all index.js files
app_express.use(staticIndexHandler({ viewsDir: dir_view, notFoundView: 'not-found' }));

// routes
app_express.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Awesome Homepage',
        name: 'new',
    });
});

export default app_express;