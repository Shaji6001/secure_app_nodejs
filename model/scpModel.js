var mongoose=require('mongoose');


const scpSchema= new mongoose.Schema(
    {
        staffId:{type:String},
        staffName:{type:String},
        staffCPR:{type:String},
        staffMobilno:{type:String},
        staffJoiningdate:{type:String}
    }
)

const scpSchemaUser=new mongoose.Schema(
    {
        userName:{type:String},
        userPassword:{type:String},
        confirmPassword:{type:String},
        userEmail:{type:String}
    }
)

const secureModel=mongoose.model('secures',scpSchema);
const userModel=mongoose.model('users',scpSchemaUser);

module.exports={secureModel};
module.exports={userModel};