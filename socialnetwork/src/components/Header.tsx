import React from 'react'
import { auth } from '../firebase';
import './index.css';
import Logo from '../img/IconPanda.png';



export const Header = () => {
    const logout = () => {
        auth.signOut();
    }

    console.log('pa buscar la foto', auth.currentUser);
    return (

        <div className="header">
            <div className="container-header">
                <div className="logo-and-info">
                    <img src={Logo} alt="Logo" />
                    <h3>BAMBOOK</h3>
                    {/* <h3>{auth?.currentUser?.email}</h3> */}
                </div>
                <div className="info" >
                    <img src ="https://lh3.googleusercontent.com/a/AATXAJxc8d-ip1iJ2jVRX_aMkfUBDXO35AixDTWeN0TH=s96-c" alt=""/>
                <h3>{auth?.currentUser?.displayName}</h3>
                    <button className="button-logout"
                        onClick={logout}>
                        Logout
                    </button>
                </div>



            </div>


        </div>
    )
}
