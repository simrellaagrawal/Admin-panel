import React from "react";
import Login from "./Login";
import "./style.css"
import AdminPanel from "./Adminpanel";
import {Routes,Route} from "react-router-dom";
import Error from "./Error";
import Student from "./Student";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Table1 from "./Table1";
import Dashboard from "./Dashboard";

function App(){
 return (
<>
      <BrowserRouter>
       <Routes>
	 		<Route exact path="/" element={<Login/>}/>
		 	<Route path="/adminpanel" element={<AdminPanel/>}/>
			 <Route path="/table1" element={<Table1/>}/>
			 <Route path="/dashboard" element={<Dashboard/>}/>
			 <Route path="/student" element={<Student/>}/>
			 <Route component={Error}/>
	</Routes>
	</BrowserRouter>
	</>
 );
}
export default App;