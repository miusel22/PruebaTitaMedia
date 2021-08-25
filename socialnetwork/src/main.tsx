
import React from 'react';
import { auth } from './firebase';

const Mainpage = () => {
    console.log(auth?.currentUser)
    // Signout function
    const logout = () => {
        auth.signOut();
    }

    return (
        <div>
           HOLIIIIIIIIIIIIII

            {auth?.currentUser?.email}
            


            <button style={{ "marginLeft": "20px" }}
                onClick={logout}>
                Logout
            </button>
        </div>
    );
}

export default Mainpage;