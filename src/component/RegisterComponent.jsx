import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LoginRegisterComponent.css';
import { authenticationService } from "../services/authentication.service";
import { accountService } from '../services/account.service';
import { alertService } from "../services";
import {TextField, Typography, Grid, Button} from '@mui/material';

const RegisterComponent = () => {
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);
    const [phoneNumber,setPhoneNumber] = useState(null);
    const [email, setEmail] = useState("report.bt@mailinator.com");
    const [password, setPassword] = useState("12345678");
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const handlelogin = () => {
        var userData = {
            "firstname" : firstName,
            "lastname" : lastName,
            "email" : email,
            "phoneNumber" : phoneNumber,
            "password" :password
        }
        setLoading(true);

        const initialValues = {
            title: 'Mr',
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: password,
            acceptTerms: true
        };

        // accountService.register(initialValues)
        console.log("initial value ---",initialValues)
        authenticationService.register(initialValues).then(user => {
            console.log("user ---",user)
          setLoading(false);
          alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
          history.push('login');
        //   if(user){
        //     history.push('/');
        //   }          
      }).catch(error => {
        // setSubmitting(false);
        alertService.error(error);
    })
    };

    return (
        <div className="main-wrapper">
            <div className="container-fluid register-wrap">
                <div className="login-wrapper">
                    <Typography sx={{ mb: 3 }} variant="h5" component="h5" align='center'>Welcome into Badipay.in</Typography>
                    <TextField fullWidth sx={{ mb: 2 }}
                        required size="small"
                        id="outlined-required"
                        label="Enter First Name"
                    />
                    <TextField fullWidth sx={{ mb: 2 }}
                        required size="small"
                        id="outlined-required"
                        label="Enter Last Name"
                    />
                    <TextField fullWidth sx={{ mb: 2 }}
                        required size="small"
                        id="outlined-required"
                        label="Enter Email"
                    />
                    <TextField fullWidth sx={{ mb: 2 }}
                        required size="small"
                        id="outlined-required"
                        label="Enter Phone Number"
                    />
                    <TextField fullWidth sx={{ mb: 2 }}
                        required size="small"
                        id="outlined-required"
                        label="Enter Password"
                    />
                    <TextField fullWidth sx={{ mb: 2 }}
                        required size="small"
                        id="outlined-required"
                        label="Enter Confirm Password"
                    />                   
                    <p className="text-end"><a href="#" className="font-weight-bold"><Link to="/login">Already have an Account?</Link></a></p>
                    <Button fullWidth variant="contained">Register</Button>
                </div>
            </div>
            
        </div>
    );
}

export default RegisterComponent;