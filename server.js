const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config.evn'})

const app = require('./app')

mongoose.connect(process.env.CONN_STR, {
 // useNewUrlParser : true
}).then((conn)=>{
 // console.log(conn)
 console.log('DB connected succesful')
}).catch((err)=>{
 // console.log(err);
})



const port = 3000;
app.listen(port, ()=>{
 console.log('Server has started')
})

