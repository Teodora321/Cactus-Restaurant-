import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import userService from '../../../services/user-service';
import { UserContext } from '../Auth/UserContext';

function Logout() {
    const [user, setUserStatus] = useContext(UserContext);

    userService.logout()
        
        .then((res) => {
        setUserStatus({loggedIn: false, userId:''})
        console.log(res);
    }).catch(err => console.log(err))

    return(<Redirect to="/login" />)
}

export default Logout;