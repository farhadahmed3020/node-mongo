const express = require ('express')


const app = express()
app.get('/',(req,res)=>{
    res.send("Node open ...YAY")
})
app.listen(4200 ,() => console.log('Listenting to port 4200'));