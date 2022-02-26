import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authenticationService } from "../services/authentication.service";
import './LoginRegisterComponent.css';
import {TextField, Typography, Grid, Button} from '@mui/material';

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
            <Typography sx={{ mb: 3 }} variant="h5" component="h5" align='center'>To Login into your Badipay Web account</Typography>
                
                <TextField fullWidth sx={{ mb: 2 }}
                    required size="small"
                    id="outlined-required"
                    label="Enter Email"
                />
                <TextField fullWidth sx={{ mb: 2 }}
                    id="outlined-password-input"
                    label="Password"
                    type="password" size="small"
                    autoComplete="current-password"
                    />
                <p className="text-end"><a className="small text-primary font-weight-bold" href="#">Forgot Password?</a></p>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" color="secondary"><Link to="/registers">Register</Link></Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained">Login</Button>
                    </Grid>
                </Grid>
            </div>
            {/* login wrapper end */}
        </div>
    );
}

export default LoginComponent;