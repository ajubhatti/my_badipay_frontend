import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LoginRegisterComponent.css';
import { TextField, Typography } from '@mui/material';
import { accountService } from "../services/account.service";
import { alertService } from "../services";
import { authenticationService } from "../services/authentication.service";

const LoginComponent = () => {
    const [email, setEmail] = useState("ajaz@gmail.com");
    const [password, setPassword] = useState("123456");
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const handlelogin = () => {
        setLoading(true);
        // onSubmit(email,password);
        authenticationService.login(email, password).then(user => {
            console.log("usr data ---", user)
            if (user && user.id) {
                setLoading(false);
                if (user) {
                    history.push('/task');
                }
            }
        })
    };

    const onSubmit = ({ email, password }) => {

        alertService.clear();
        if (!email) {

        }
        if (!password) {

        }
        if (email && password) {
            accountService.login(email, password)
                .then(() => {
                    // const { from } = location.state || { from: { pathname: "/" } };
                    history.push('/');
                })
                .catch(error => {
                    // setSubmitting(false);
                    alertService.error(error);
                });
        }

    }

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