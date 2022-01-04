import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './LoginRegisterComponent.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { authenticationService } from "../Services/authentication.service";

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
        authenticationService.register(userData).then(user => {
            console.log("user ---",user)
          setLoading(false);
          if(user){
            history.push('/');
          }          
      })
    };

    return (
        <div className="main-wrapper">
            <MDBContainer fluid className="register-wrap">
                <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol>
                        <div className="login-wrapper">
                            <MDBTypography variant='h4'  colorText="secondary" align='center' className="mb-4">Welcome into Badipay.in</MDBTypography>        
                            <MDBInput className="mb-3" label='Enter First Name' id='form1' type='text' autoComplete="new-password" onChange={(e :
                                            any)=>setFirstName(e.target.value)}/>
                            <MDBInput className="mb-3" label='Enter Last Name' id='form1' type='text' autoComplete="new-password" onChange={(e :
                                            any)=>setLastName(e.target.value)}/>
                            <MDBInput className="mb-3" label='Enter Email' id='form1' type='text' autoComplete="new-password" onChange={(e :
                                            any)=>setEmail(e.target.value)}/>
                            <MDBInput className="mb-3" label='Enter Phone Number' id='form1' type='text' autoComplete="new-password" onChange={(e :
                                            any)=>setPhoneNumber(e.target.value)}/>
                            <MDBInput className="mb-3" label='Enter Password' id='form1' type='text' autoComplete="new-password" onChange={(e :
                                            any)=>setPassword(e.target.value)}/>
                            <MDBInput className="mb-3" label='Enter Confirm Password' id='form1' type='text' autoComplete="new-password" onChange={(e :
                                            any)=>setPassword(e.target.value)}/>
                            <div className="d-grid gap-2">
                                <MDBBtn onClick={handlelogin}>Register</MDBBtn>
                                <MDBTypography tag='small' align='right'><Link to="/" className="font-weight-bold">Already have an Account?</Link></MDBTypography>
                            </div>
                            {/* <div className="field-wrapper">
                                <label>First Name</label>
                                <div>
                                    <input type="text"  placeholder="Enter First Name" onChange={(e :
                                        any)=>setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <label>Last Name</label>
                                <div>
                                    <input type="text"  placeholder="Enter Last Name" onChange={(e :
                                        any)=>setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <label>Email</label>
                                <div>
                                    <input type="text"  placeholder="Enter Email" onChange={(e :
                                        any)=>setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <label>Phone Number</label>
                                <div>
                                    <input type="text"  placeholder="Enter Phone Number" onChange={(e :
                                        any)=>setPhoneNumber(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field-wrapper">
                                <label>Password</label>
                                <div className="pass-wrapper">
                                    <input placeholder="Enter Password" type="password"
                                        onChange={(e : any)=>setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="Button">
                                <input type="button" value={"Submit"} onClick={handlelogin} />
                            </div>
                            <div className="reset-Button">
                                <Link to='/'>Login</Link>
                            </div> */}
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        </div>
    );
}

export default RegisterComponent;