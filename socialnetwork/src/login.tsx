
import React from 'react';
import {auth , provider}  from './firebase';
  
const Login = () => {
  
    // Sign in with google
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
      
    return (
        <div>
         
                <button style={{"marginTop" : "200px"}} 
                onClick={signin}>Sign In with Google</button>
          
        </div>
    );
}
  
export default Login;