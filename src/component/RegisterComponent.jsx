import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LoginRegisterComponent.css';
import { authenticationService } from "../services/authentication.service";
import { accountService } from '../services/account.service';
import { alertService } from "../services";
import { async } from "rxjs";
import {Typography, TextField, Button} from '@mui/material';

const RegisterComponent = () => {
    const [userName,setUserName] = useState(null);
    const [phoneNumber,setPhoneNumber] = useState(null);
    const [email, setEmail] = useState("report.bt@mailinator.com");
    const [password, setPassword] = useState("12345678");
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [referrelId,setReferrelId] = useState(null);
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    const handleRegister = async () => {
        setLoading(true);
        const initialValues = {
            userName: userName,
            phoneNumber :  phoneNumber,
            email: email,
            referrelId:referrelId,
            password: password,            
            confirmPassword: confirmPassword,
            acceptTerms: true
        };
        console.log("initial value ---",initialValues)
        let registerUser = await accountService.register(initialValues)
        console.log("registerUser----",registerUser)
        const verifyUrl = `http://localhost:3000/account/verify-email?token=${registerUser.account.account.verificationToken}`;
        history.push(verifyUrl);
        console.log("link ----",verifyUrl)
        // authenticationService.register(initialValues).then(user => {
        //     console.log("user ---",user)
        //     setLoading(false);
        //     alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
        //     const verifyUrl = `http://localhost:3000/account/verify-email?token=${user.verificationToken}`;
        //     history.push(verifyUrl);
        // //   if(user){
        // //     history.push('/');
        // //   }          
        // }).catch(error => {
        //     // setSubmitting(false);
        //     alertService.error(error);
        // })
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