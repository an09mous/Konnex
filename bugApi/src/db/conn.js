const mongoose =require("mongoose");
mongo_uri = "mongodb+srv://an09mous:"
password = "konnex@123"
suffix = "@cluster0.is84r.mongodb.net/konnexDB?retryWrites=true&w=majority"
const connect = mongo_uri + password+ suffix
mongoose.connect(connect,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false 
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("no connection");
})