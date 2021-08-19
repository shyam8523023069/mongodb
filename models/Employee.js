const mongoose = require ('mongoose')
const Schemas = mongoose.Schema

const employeeSchema = new Schemas({
    name:{
        type: String
    },
    designation:{
        type:String
    },
    email:{
        type: String
    },
    phone:{
        type:Number
    }
}, {timestamps:true} )

 const Employee = mongoose.model('Employee', employeeSchema )
 module.exports = Employee