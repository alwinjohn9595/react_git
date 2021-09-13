const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema ({
    EmployeeID : String,
    Name: String,
    Designation: String,
    Salary : String,
    PhoneNo : Number,
    
});



var Employeedata = mongoose.model('employeedata', EmployeeSchema);



module.exports = Employeedata;