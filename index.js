
const express = require('express')
const app = express()

app.use(express.static(__dirname));
var port = process.env.PORT || 5000;

app.get('/home', (req, res) => res.send('Hello world'))

app.get('/',(req,res)=> res.sendFile(__dirname+"/index.html"))

app.listen(port, () => console.log('Example app listening on port 3000!'))