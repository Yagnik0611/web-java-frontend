import logo from './logo.svg';
import './App.css';

import ViewRecipe from './ViewRecipe'

import {
 
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <>
 
      <div class="header">
  <h1>Employee Management App</h1>
  
</div>


<div class="navbar">
  <a href="/employee/viewemp" >View Employee</a>
  <a href="/employee/create">Add Employee</a>
  
  <a  href="/" class="right">Signup</a>
  

</div>
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewRecipe />}> </Route>
       

      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
