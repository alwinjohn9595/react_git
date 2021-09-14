import React from 'react';
import { FormControl,Typography} from '@material-ui/core';
import { FormGroup,InputLabel,Input,Button,makeStyles } from '@material-ui/core';
 import {useHistory} from 'react-router-dom';
import { addEmployee } from '../Services/EmployeeServices';
import { useState } from 'react';

const usestyle= makeStyles({
    container:{
        width:'50%',
        margin:"5% 0 0 25%",
        '& > *':{
            marginTop:'20px'
        }
    }
})

const initialValue = {
    EmployeeID: '',
    Name: '',
    Designation: '',
    Salary: '',
    PhoneNo:'',
}


const AddEmployee = ()=> {

    const [employee, setUser] = useState(initialValue);
    const { EmployeeID, Name, Designation, Salary, PhoneNo } = employee;


    let history = useHistory();
    const classes = usestyle();


    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...employee, [e.target.name]: e.target.value})
    }

    const addEmployeeDetails = async() => {
        console.log(employee);
        await addEmployee(employee);
         history.push('/');
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h3">Add Employee</Typography>
            <FormControl>
            <InputLabel >Employee ID</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='EmployeeID' value={EmployeeID} id="my-input" />
            
            </FormControl>
            <FormControl>
            <InputLabel >Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='Name' value={Name} id="my-input" />
            
            </FormControl>
            <FormControl>
            <InputLabel >Designation</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='Designation' value={Designation} id="my-input" />
            
            </FormControl>
            <FormControl>
            <InputLabel >Salary</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='Salary' value={Salary} id="my-input" />
            
            </FormControl>
            <FormControl>
            <InputLabel >Phone Number</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='PhoneNo' value={PhoneNo} id="my-input" />
            
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => addEmployeeDetails()}>Add Employee</Button>

        </FormGroup>
    )
}

export default AddEmployee
