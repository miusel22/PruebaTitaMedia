
import React from 'react';
import { auth } from './firebase';
import {Header} from './components/Header';
import {ShowUser } from './showUser';


const Mainpage = () => {

    return (
        <div>
            <Header></Header>
            {auth?.currentUser?.email}

            <ShowUser/>
        </div>
    );
}

export default Mainpage;