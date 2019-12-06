import React from 'react';
import { Redirect } from 'react-router-dom';
import userService from '../../../services/user-service'

function Logout() {

    userService.logout().then((res) => {
        console.log(res);
    }).catch(err => console.log(err))

    return(<Redirect to="/login" />)
}

export default Logout;