var {Apis} = require("./cjs")
var express = require('express')
var app = express()
let wsString = "ws://127.0.0.1:8090";
let active;

Apis.instance(wsString, true).init_promise.then((res) => {
	active=true;
	console.log('Connected');
}).catch((err) => {
	active=false;
});


app.get('/', (req, res) => {
	if (active) {
		res.json({})
	} else {
		res.status(500);
		res.send('Internal Server Error');
	}
})

app.listen(3000, () => console.log('bts health express starting'));
