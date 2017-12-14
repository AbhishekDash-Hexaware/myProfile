
const express = require('express')
const app = express()
var morgan = require('morgan')

app.use(express.static(__dirname+"/content"));
app.use(morgan('common'))

var port = process.env.PORT || 5000;

app.get('/wala', (req, res) =>{ 
res.send('Hello world')
});

app.get('/',(req,res)=> res.sendFile(__dirname+"/content/index.html"))

app.listen(port, ()=>console.log('Example app listening on port 3000!'))