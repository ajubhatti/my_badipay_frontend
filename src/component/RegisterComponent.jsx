import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LoginRegisterComponent.css';
import { authenticationService } from "../services/authentication.service";
import { accountService } from '../services/account.service';
import { alertService } from "../services";

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
                </div>
            </div>
            
        </div>
    );
}

export default RegisterComponent;