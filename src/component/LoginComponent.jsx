import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authenticationService } from "../services/authentication.service";
import './LoginRegisterComponent.css';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

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
            <div className="login-wrapper">  
                <MDBTypography variant='h4' align='center' colorText="secondary" className="mb-4">To Login into your Badipay Web account</MDBTypography>
                <MDBInput className="mb-3" label='Enter Email' id='form1' type='text' {...email} onChange={(e)=>setEmail(e.target.value)} autoComplete="new-password" />
                <MDBInput className="mb-3" label='Enter Password' id='form1' type='text' autoComplete="new-password" onChange={(e)=>setPassword(e.target.value)}/>
                <div className="d-grid gap-2">
                    <MDBTypography tag='small' align='right'><a href="" className="font-weight-bold">Forgot Password?</a></MDBTypography>
                    <Link className="d-block" to='/task'><MDBBtn className="w-100" onClick={handlelogin}>Login</MDBBtn></Link>
                    <Link className="d-block" to='/registers'><MDBBtn className="w-100" outline to='/registers'>Register</MDBBtn></Link>
                </div>
                {/* <div className="field-wrapper">
                    <label>Email</label>
                    <div>
                        <input type="text" {...email} placeholder="Enter Email" onChange={(e :
                            any)=>setEmail(e.target.value)}
                        autoComplete="new-password" />
                    </div>
                </div> */}
                {/* <div className="field-wrapper">
                    <label>Password</label>
                    <div className="pass-wrapper">
                        <input placeholder="Enter Password" // type="password" // {...password} type="password"
                            autoComplete="new-password" onChange={(e : any)=>setPassword(e.target.value)}
                        />
                    </div>
                </div> */}
                {/* <div className="Button">
                    <input type="button" value="Login" onClick={handlelogin} />
                </div>
                <div className="reset-Button">
                    <Link to='/registers'>Register</Link>
                </div> */}
            </div>
        </div>
    );
}

export default LoginComponent;