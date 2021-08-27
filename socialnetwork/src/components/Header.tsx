import { auth } from '../firebase';
import './styles/index.css';
import Logo from '../img/IconPanda.png';



export const Header = () => {

    const logout = () => {
        auth.signOut();
    }


    return (

        <div className="header">
            <div className="container-header">
                <div className="logo-and-info">
                    <img src={Logo} alt="Logo" />
                    <h3>B A M B O O K</h3>
                    {/* <h3>{auth?.currentUser?.email}</h3> */}
                </div>
                <div className="info" >
                    <img src={auth?.currentUser?.photoURL||''} alt=""/>
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
