import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authenticationService } from "../services/authentication.service";
import './LoginRegisterComponent.css';
import {TextField, Typography} from '@mui/material';

const LoginComponent = () => {
    const [email, setEmail] = useState("ajaz@gmail.com");
    const [password, setPassword] = useState("123456");
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const handlelogin = () => {
        setLoading(true);
        authenticationService.login(email, password).then(user => {
            if(user && user._id){
                setLoading(false);
                if(user){
                  history.push('/task');
                }     
            }     
        })
    };

    return (
        <div className="main-wrapper">
            {/* login wrapper  */}
            <div className="login-wrapper">  
            <Typography variant="h5" component="h5" align='center'>To Login into your Badipay Web account</Typography>
                
                <TextField
                    required
                    id="outlined-required"
                    label="Enter Email"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                <p className="text-end"><a className="small text-primary font-weight-bold" href="#">Forgot Password?</a></p>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-secondary btn-block"><Link to="/registers">Register</Link></button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary btn-block">Login</button>
                    </div>
                </div>
            </div>
            {/* login wrapper end */}
        </div>
    );
}

export default LoginComponent;