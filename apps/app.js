
class ImageRec{
    constructor(key,url){
        console.log("constructor invoked")
        this.key=key;
        this.url=url;
    }

    predictor(callback){
        console.log("predicting");
        this.key.models.predict(Clarifai.GENERAL_MODEL,this.url)
        .then((res)=>{
            console.log("predicted");
            callback(res,null)   
        },
        (err)=>{
            console.error("Error")
            callback(null,err)
        })

    }
}

module.exports=ImageRec;
