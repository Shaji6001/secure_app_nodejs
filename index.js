const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
var {secureModel}=require('./model/scpModel');
//var{userModel}=require('./model/scpModel');
const MongoClient = require('mongodb').MongoClient;

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://shaji:ponnu123@cluster1.u2cuq.mongodb.net/scpdb?retryWrites=true&w=majority",{ useNewUrlParser: true},{ useUnifiedTopology: true })

app.post('/addstaff',async (req,res)=>{ 
    try
    {
     var data=req.body;
     console.log(data);
     var data=new secureModel(req.body);
     var result= await data.save();
     res.json(result);
    }
    catch(error){res.status(500).send(error)}
})
app.post('/users',async (req,res)=>{ 
    try
    {
     var data=req.body;
     console.log(data);
     var data=new userModel(req.body);
     var result= await data.save();
     res.json(result);
    }
    catch(error){res.status(500).send(error)}
})

app.get('/viewall', async(req,res)=>{
    try
    {
        var result=await secureModel.find().exec();
        res.json(result);
    }
    catch(error){res.status(500).send(error)};
})

app.post('/search', async (req,res)=>{
    try
    {
        secureModel.find(req.body, (error, data)=>{
            if(error){throw error}
            else{res.json(data)};
        })
    }
    catch(error){res.status(500).send(error)};
})

app.post('/delete', async(req,res)=>{
    try
    {
        secureModel.findByIdAndDelete(req.body.id,(error,data)=>{
            if(error){throw error}
            else{
                res.json({'Status':"Success"});
            }
        })
    }
    catch(error){res.status(500).send(error)}
})

app.post('/deleteuser', async(req,res)=>{
    try
    {
       secureModel.findByIdAndDelete(req.body.id,(error,data)=>{
            if(error){throw error}
            else{
                res.json({'Status':'Success'});
            }
        })
    }
    catch(error){res.status(500).send(error)}
})

app.put('/update',async(req,res)=>{
    try
    {
        secureModel.findByIdAndUpdate(req.body.id,
            {
                staffId:req.body.staffId,staffName:req.body.staffName,
                staffCPR:req.body.staffCPR,staffMobilno:req.body.staffMobilno,
                staffJoiningdate:req.body.staffJoiningdate,passportNo:req.body.passportNo,
                passportExpirydate:req.body.passportExpirydate,visaExpirydate:req.body.visaExpirydate
            },(error,data)=>{
                if(error){throw error}
                else{
                    res.json({'Status':'Success'}); 
                }
            }
            )
    }
    catch(error){res.status(500).send(error)}
})




app.listen(process.env.PORT  ||  3002,{ useUnifiedTopology: true } ,
    { useNewUrlParser: true},function()
{
    console.log("Node server Running!!");
}
)