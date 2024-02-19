const mongoose = require('mongoose');

const poupancaSchema = new mongoose.Schema({
    poupancaID:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        require:true
    },
    goal:{
        type:Number,
        required:true
    },
    
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Poupanca = mongoose.model("Poupanca",poupancaSchema);

module.exports = Poupanca;