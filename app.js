const express = require('express');
const cors=require('cors');
const app=express();
const pushNotificationData=require('./testing.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/pushNotificationData',(req,res)=>{
    res.json(
        {
            email:"akb@gmail.com",
            first_name:"AKB"
        }
        );
})
const port= process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Listning on port ${port}`);
})