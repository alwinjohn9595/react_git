import { Table,TableBody,TableHead,TableRow,TableCell, makeStyles ,Button} from '@material-ui/core'
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteEmployee, getEmployees } from '../Services/EmployeeServices';
import { useState, useEffect } from 'react';

const useStyle=makeStyles({
    table:{
        width:'90%',
        margin: '50px 0 0 50px'
    },
    thead:{
        "&>*":{
            background:"#000000",
            color:'#ffffff',
            fontsize:'20'
        },
        row: {
            '& > *': {
                fontSize: '17'
            }
        }   
    }
});



   
 

function Home() {
    const [employee, setUsers] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEmployees();
    }

    const getAllEmployees = async () => {
        let response = await getEmployees();
        setUsers(response.data);
    }

 s
    const classes=useStyle();
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                <TableCell >Employee Id</TableCell>
                <TableCell >Name</TableCell>
                <TableCell >Designation</TableCell>
                <TableCell >Salary</TableCell>
                <TableCell >Phone No.</TableCell>
                <TableCell ></TableCell>
                        
                </TableRow>
            </TableHead>
            <TableBody>
                
                         {employee.map((user) => (
                            <TableRow className={classes.row} key={user.id}>
                                <TableCell>{user.EmployeeID}</TableCell> 
                                <TableCell>{user.Name}</TableCell>
                                <TableCell>{user.Designation}</TableCell>
                                <TableCell >{user.Salary}</TableCell>
                                <TableCell >{user.PhoneNo}</TableCell>
                               
                               
                                <TableCell>
                                    <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> 
                                    <Button color="secondary" variant="contained" onClick={() => deleteEmployeeData(user._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}



                     
                
                 

            </TableBody>

        </Table>
    )
}

export default Home

