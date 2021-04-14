var mongoose=require('mongoose');


const scpSchema= new mongoose.Schema(
    {
        staffId:{type:String},
        staffName:{type:String},
        staffCPR:{type:String},
        staffMobilno:{type:String},
        staffJoiningdate:{type:String},
        passportNo:{type:String},
        passportExpirydate:{type:String},
        visaExpirydate:{type:String}
        
    }
)

var schemaUser=new mongoose.Schema(
    {
        userName:{type:String},
        userPassword:{type:String},
        confirmPassword:{type:String},
        userEmail:{type:String}
    }
)

var secureModel=mongoose.model('secures',scpSchema);
var userModel=mongoose.model('users',schemaUser);

module.exports={secureModel},{userModel};
//module.exports={userModel};