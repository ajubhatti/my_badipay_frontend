import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authenticationService } from "../Services/authentication.service";

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
                <div className="field-wrapper">
                    <label>Email</label>
                    <div>
                        <input type="text" {...email} placeholder="Enter Email" onChange={(e :
                            any)=>setEmail(e.target.value)}
                        autoComplete="new-password" />
                    </div>
                </div>
                <div className="field-wrapper">
                    <label>Password</label>
                    <div className="pass-wrapper">
                        <input placeholder="Enter Password" // type="password" // {...password} type="password"
                            autoComplete="new-password" onChange={(e : any)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="Button">
                    <input type="button" value="Login" onClick={handlelogin} />
                </div>
                <div className="reset-Button">
                    <Link to='/registers'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;