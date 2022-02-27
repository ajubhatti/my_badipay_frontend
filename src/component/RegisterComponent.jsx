import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LoginRegisterComponent.css';
import { authenticationService } from "../services/authentication.service";
import { accountService } from '../services/account.service';
import { alertService } from "../services";
import { async } from "rxjs";

const baseUrl = `http://192.168.123.240:4000/accounts`;

const RegisterComponent = () => {
    const [userName, setUserName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState("report.bt@mailinator.com");
    const [password, setPassword] = useState("12345678");
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [referrelId, setReferrelId] = useState(null);
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    const handleRegister = async () => {
        setLoading(true);
        const initialValues = {
            userName: userName,
            phoneNumber: phoneNumber,
            email: email,
            referrelId: referrelId,
            password: password,
            confirmPassword: confirmPassword,
            acceptTerms: true
        };
        console.log("initial value ---", initialValues)
        let registerUser = await accountService.register(initialValues)
        console.log("registerUser----", registerUser)
        const verifyUrl = `${baseUrl}/verify-email?token=${registerUser.account.account.verificationToken}`;
        history.push(verifyUrl);
        console.log("link ----", verifyUrl)
        // authenticationService.register(initialValues).then(user => {
        //     console.log("user ---",user)
        //     setLoading(false);
        //     alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
        //     const verifyUrl = `${baseUrl}/verify-email?token=${user.verificationToken}`;
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
                    <h4>Welcome into Badipay.in</h4>
                    <div class="form-outline">
                        <input type="text" id="form12" class="form-control" />
                        <label class="form-label" for="form12">Enter First Name</label>
                    </div>
                    <div class="form-outline">
                        <input type="text" id="form12" class="form-control" />
                        <label class="form-label" for="form12">Enter Last Name</label>
                    </div>
                    <div class="form-outline">
                        <input type="text" id="form12" class="form-control" />
                        <label class="form-label" for="form12">Enter Email</label>
                    </div>
                    <div class="form-outline">
                        <input type="text" id="form12" class="form-control" />
                        <label class="form-label" for="form12">Enter Phone Number</label>
                    </div>
                    <div class="form-outline">
                        <input type="password" id="form12" class="form-control" />
                        <label class="form-label" for="form12">Enter Password</label>
                    </div>
                    <div class="form-outline">
                        <input type="password" id="form12" class="form-control" />
                        <label class="form-label" for="form12">Enter Confirm Password</label>
                    </div>
                    <p className="text-end"><a href="#" className="font-weight-bold"><Link to="/login">Already have an Account?</Link></a></p>
                    <button className="btn btn-primary btn-block">Login</button>
                </div >
            </div >
        </div >
    );
}

export default RegisterComponent;