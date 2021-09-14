
import {AppBar,Toolbar,makeStyles,Typography} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyle = makeStyles({
    header:{
        background:'#111111' 
    },
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        marginLeft: "10px",
        fontSize:'20px'
    }
})


const Header = ()=> {
    const  classes = useStyle();
    
        return (

          <AppBar className={classes.header} position="static">
              <Toolbar>
                <Typography className={classes.tabs} component="h1">
                    Employee App
                </Typography>
                <NavLink className={classes.tabs} to='/'>
                    Employee Details
                </NavLink>
                <NavLink className={classes.tabs} to='/add'>
                    Add Employee
                </NavLink>
              </Toolbar>
          </AppBar>
         
           
        )
    }


export default Header
