import React, { useContext } from 'react';
import UserContext from '../user/Auth/UserContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navigation() {
    const [user] = useContext(UserContext);

    return (
        <NavContainer className="main-nav">
            <nav className="navbar" >
                <ul className="list-unstyled row" >
                    <li>
                        <img src="./cactus-logo.png" alt="logo" id="logo" />
                    </li>

                    <Link to="/">
                        <li className='glyphicon glyphicon-home'> 
                            Home
                        </li>
                    </Link>
                    <Link to="/menu">
                        <li className='glyphicon glyphicon-menu-hamburger'>
                            Menu
                        </li>
                    </Link>
                    <Link to="/contacts">
                        <li className='glyphicon glyphicon-phone-alt'>
                            Contacts
                        </li>
                    </Link>
                </ul>
                {!user.loggedIn ?
                    <span className='user'>
                        <Link to="/register">
                            <li className='glyphicon glyphicon-pushpin'>
                                Register
                            </li>
                        </Link>
                        <Link to="/login">
                            <li className='glyphicon glyphicon-log-in'>
                                Login
                            </li>
                        </Link>
                    </span>
                    :
                    <span className="user">
                        <Link to="/profile">
                            <li className='glyphicon glyphicon-user'>
                                Profile
                                <div className='welcome'> Welcome {user.name}</div>
                            </li>
                        </Link>
                        <Link to="/cart">
                            <li className='glyphicon glyphicon-shopping-cart'>
                                Cart
                            </li>
                        </Link>
                        <Link to="/logout">
                            <li className='glyphicon glyphicon-log-out'>
                                Logout
                            </li>
                        </Link>
                    </span>
                    
                }
               
            </nav>
        </NavContainer>
    );
}
export default Navigation;

const NavContainer = styled.nav`
  .navbar {
    background: rgba(0,0,0, 0.8);
    padding-top: 6rem;
    color: white;
    top:0;
    width:100%;
    display:flex;
    align-items: center;
    position:absolute;
    z-index:2;
  }
  .welcome{
      padding-top:30px;
      
  }
  ul li {
    color: white;
    margin: 0 5rem;
    font-size: 1.5rem;
    padding: 0 5 rem;
  }
 ul li:hover {
    color: #8a261d;
    text-decoration:none;
  }
  .user li{
    bottom: 0;
    color:#ff5e18;
    font-size: 1.5rem;
    text-decoration:none;
    margin-left: 2em;
    list-style: none;
  }
  .user li:hover {
    color: white;
    text-decoration:none;
  }
  .user{
    position: absolute;
    right: 126px;
    width: 200px;
    height: 120px;
    display: inherit;
    text-decoration:none;
  }

  #logo{
    position: absolute;
    top: -18px;
    left: 14pt;
    height: 132px;
    width: 181px;


}
 `


