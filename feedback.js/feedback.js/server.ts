const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.redirect('/index.html');
});

app.post('/submit', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ a: 1 }));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use(express.static('public'))
