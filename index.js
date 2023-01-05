const express = require("express");
const path = require('path')

const APP = express();
const PORT = 4200;

APP.use(express.static(path.join(__dirname, '/disney-app/dist'), { maxAge: '1h' }));

APP.get('/', (req, res) => {
	res.sendFile(`${__dirname}/disney-app/dist/index.html`);
});

APP.get('**', (req, res) => {
	res.sendFile(`${__dirname}/disney-app/dist/index.html`);
});

APP.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
});