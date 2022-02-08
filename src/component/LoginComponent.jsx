import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authenticationService } from "../services/authentication.service";
import './LoginRegisterComponent.css';

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
            {/* login wrapper  */}
            <div className="login-wrapper">  
                <h4>To Login into your Badipay Web account</h4>
                <div class="form-outline">
                    <input type="text" id="form12" class="form-control" />
                    <label class="form-label" for="form12">Enter Email</label>
                </div>
                <div class="form-outline">
                    <input type="password" id="form12" class="form-control" />
                    <label class="form-label" for="form12">Enter Password</label>
                </div>
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