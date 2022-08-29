


const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    server:{
type:Array
    },
    client:{
        type:String
    },
    name:{
        type:String
    }

})
module.exports=mongoose.model('Users',userschema)