import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LoginRegisterComponent.css';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
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
            console.log("usr data ---",user)
            if(user && user.id){
                setLoading(false);
                if(user){
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
            <div className="login-wrapper">  
                <MDBTypography variant='h4' align='center' colorText="secondary" className="mb-4">To Login into your Badipay Web account</MDBTypography>
                <MDBInput className="mb-3" label='Enter Email' id='form1' type='text' {...email} onChange={(e)=>setEmail(e.target.value)} autoComplete="new-password" />
                <MDBInput className="mb-3" label='Enter Password' id='form1' type='text' autoComplete="new-password" onChange={(e)=>setPassword(e.target.value)}/>
                <div className="d-grid gap-2">
                    <MDBTypography tag='small' align='right'><a href="/account/forgot-password" className="font-weight-bold">Forgot Password?</a></MDBTypography>
                    <Link className="d-block" to='/task'><MDBBtn className="w-100" onClick={handlelogin}>Login</MDBBtn></Link>
                    <Link className="d-block" to='/registers'><MDBBtn className="w-100" outline to='/registers'>Register</MDBBtn></Link>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;