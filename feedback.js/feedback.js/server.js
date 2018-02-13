var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.redirect('/index.html');
});
app.listen(3000, function () { return console.log('Example app listening on port 3000!'); });
app.use(express.static('public'));
//# sourceMappingURL=server.js.map