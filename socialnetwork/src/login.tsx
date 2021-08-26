
import React from 'react';
import { auth, provider } from './firebase';
import './styles/login.css';
import Logo from './img/IconPanda.png';


const Login = () => {

    // Sign in with google
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <>
        <div className="body-login">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Sign In </h2>
                    <div className="fadeIn first">
                        <img className="img-login" src={Logo} id="icon" alt="User Icon" />
                    </div>
                    <form>
                        <input onClick={signin} type="button" className="fadeIn fourth" value="Log In" />
                    </form>

                    <div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Login;