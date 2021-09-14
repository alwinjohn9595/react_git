import React from 'react';
import { useState, useEffect } from 'react';
import { FormControl,Typography} from '@material-ui/core';
import { FormGroup,InputLabel,Input,Button,makeStyles } from '@material-ui/core';

import { useHistory, useParams } from 'react-router-dom';
import { editEmployee, getEmployees } from '../Services/EmployeeServices';

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
    PhoneNo:''
}


const EditEmployee = ()=> {


    const [employee, setUser] = useState(initialValue);
    const { EmployeeID, Name, Designation, Salary, PhoneNo } = employee;


    let history = useHistory();
    const classes = usestyle();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getEmployees(id);
        setUser(response.data);
    }

    const editEmployeeDetails = async() => {
        const response = await editEmployee(id, employee);
        history.push('/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...employee, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h3">Edit  Employee Details</Typography>
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
            
            <Button variant="contained" color="primary" onClick={() => editEmployeeDetails()}>Add Employee</Button>


        </FormGroup>
    )
}

export default EditEmployee
