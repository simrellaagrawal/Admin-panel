import { Button, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
function Login(){
 const navigate =useNavigate();
    return(
        <div className="login">
        <h1>Login</h1>
       <div className="username">
        <div className="username">
        <TextField
              id="outlined-multiline-flexible"
              label="Username"
              multiline
              maxRows={4}
            />
            </div>
            <div className="username">
            <TextField
              id="outlined-multiline-flexible"
              label="password"
              multiline
              maxRows={4}
            />
            </div>
        <div>
        <Button  onClick={()=>navigate("/adminpanel")}
         variant="contained">Login</Button>
          </div>
          </div>
        </div>
    )
}
export default Login;