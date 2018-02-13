const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.redirect('/index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.use(express.static('public'))
