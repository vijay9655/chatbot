const express=require("express");
const  mongoose = require('mongoose')
const  url  = "mongodb://localhost/chatbot"
const app=express();
const http=require("http")
const cors=require('cors');
const {Server}=require("socket.io");




//db connections =====start=====
mongoose.connect(url, {useNewUrlParser:true})
const con=mongoose.connection
app.use(express.json())

con.on('open',()=>{
    console.log('db connected');
})
const  apiroutes=require('./router/apirouter')
app.use('/users',apiroutes)
//complete db



//server side client connection part
app.use(cors());
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    },
})

io.on("connection",(socket)=>{
    console.log(`user connected :${socket.id}`);
    socket.on("join_room",(data)=>{
        console.log("user join room",socket.id,' room id',data);
        socket.join(data);
    })
    socket.on("send_message",(data)=>{
        socket.to(data.room).emit("receive_message",data)
        console.log(data);
    });
    socket.on("disconnect",()=>{
        console.log("Userdisconnect",socket.id);
    })

})


server.listen(3001,()=>{
    console.log("server started");
})

