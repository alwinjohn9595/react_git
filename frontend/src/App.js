
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import {BrowserRouter,Route,Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/add' component={AddEmployee}/>
    <Route exact path='/edit/:id' component={EditEmployee}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
