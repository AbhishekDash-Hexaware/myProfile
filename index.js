const express = require('express')
var morgan = require('morgan')
 

const app = express()



app.use(express.static(__dirname+"/content"));
app.use(morgan('common'))

var port = process.env.PORT || 5000;

app.get('/wala', (req, res) =>{ 
res.send('Hello world')
});

app.get('/',(req,res)=> 
res.sendFile(__dirname+"/content/index.html"));

app.get('/imagerec',(req,res)=>{
    res.send("development inprogress")
})

app.listen(port, (req,res)=>
    console.log('Example app listening on port 3000!')
)





//======================================================================================================//
function recognise(req,res){
    var ob = new imagerec(Clariapp,"http://www.residentialcare.org/wp-content/uploads/2014/05/HR-People.jpg")
    ob.predictor((result,err)=>{
        if(err){
            console.log(err)
        }else{
            // console.log(JSON.stringify(res));
            res.send(result);
        }
    });
}