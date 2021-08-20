const { response } = require('express')
const Employee = require ('../models/Employee')

 //Show the list of Employees
 const index = (req, res, next) => {
     Employee.find()
     .then(response => {
         res.json({
             response
         })
     } )
     .catch(error => {
         res.json({
             message:'An error Occured....!'
         })
     } )
 }

 const show = (req, res, next) => {
     let employeeID = req.body.employeeID
     Employee.findById(employeeID)
     .then(response => {
         res.json({response})
     } )
     .catch(error => {
         res.json({

             message: 'An error Occured...!'
         })
     })
 }

 // Add New Employee
 const store = (req, res, next ) => {
     let employee = new Employee({
         name: req.body.name,
         designation: req.body.designation,
         email: req.body.email,
         phone: req.body.phone,
         age: req.body.age
     })
     console.log("noode ====",employee)
     employee.save()
     .then(response => {
         res.json({
             message: 'Employee Added Successfully...'
         })
     } )
     .catch(error => {
         res.json({
             message: 'An error Occured...!'
         })
     })
 }

 // Update an Employee
 const update = (req, res, next) =>{
     let employeeID = req.body.employeeID

     let updatedDate ={
         name:req.body.name,
         designation: req.body.designation,
         email: req.body.email,
         phone: req.body.phone,
         age: req.body.age
     }
     Employee.findByIdAndUpdate(employeeID, {$set: updatedDate})
     .then(() =>{
         res.json({
             message:'Employee updated Succeddfully...!!'
         })
     } )
     .catch(error => {
         res.json({
             message: 'An error Occured...!'
         })
     })
 }

 //Delete an Employee
const destroy = (req, res, next) => {
    let employeeID =req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message: 'Employee Deleted Successfully...!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured...!'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}