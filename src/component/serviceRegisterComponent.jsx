import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LoginRegisterComponent.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { authenticationService } from "../services/authentication.service";
import { accountService } from '../services/account.service';
import { alertService } from "../services";
import { async } from "rxjs";

const serviceRegisterComponent = () => {
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
            <MDBContainer fluid className="register-wrap">
                <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol>
                        <div className="login-wrapper">
                            <MDBTypography variant='h4' colorText="secondary" align='center' className="mb-4">Welcome into Badipay.in</MDBTypography>
                            <MDBInput className="mb-3" label='Name' id='form1' type='text' autoComplete="name" onChange={(e)=>setUserName(e.target.value)}/>
                            <MDBInput className="mb-3" label='Email' id='form1' type='text' autoComplete="email" onChange={(e)=>setEmail(e.target.value)}/>
                            <MDBInput className="mb-3" label='Phone Number' id='form1' type='text' autoComplete="phone" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                            <MDBInput className="mb-3" label='Referel Link' id='form1' type='text' autoComplete="referelLink" onChange={(e)=>setReferrelId(e.target.value)}/>
                            <MDBInput className="mb-3" label='Password' id='form1' type='password' autoComplete="password" onChange={(e)=>setPassword(e.target.value)}/>
                            <MDBInput className="mb-3" label='Confirm Password' id='form1' type='password' autoComplete="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                            <div className="d-grid gap-2">
                                <MDBBtn onClick={handleRegister}>Register</MDBBtn>
                                <MDBTypography tag='small' align='right'><Link to="/" className="font-weight-bold">Already have an Account?</Link></MDBTypography>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        </div>
    );
}

export default serviceRegisterComponent;