import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import styled from 'styled-components';



function Navigation() {
    return (
        <NavContainer className="main-nav">
            <nav className="navbar" >
                <ul className="list-unstyled row" >
                    <li>
                        <img src="./cactus-logo.png" alt="logo" id="logo" />
                    </li>

                    <Link to="/">
                        <li>
                            Home
                    </li>
                    </Link>
                    <Link to="/menu">
                        <li>
                            Menu
                        </li>
                    </Link>
                    <Link to="/contacts">
                        <li>
                            Contacts
                    </li>
                    </Link>
                </ul>
                <span className='user'>
                <Link to="/register">
                        <li>
                            Register
                        </li>
                    </Link>
                    <Link to="/login">
                        <li>
                            Login
                        </li>
                    </Link> 
                </span>
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
    color:#96281e;
    font-size: 1.5rem;
    text-decoration:none;
    margin-left: 3em;
    list-style: none;
  }
  .user li:hover {
    color: white;
    text-decoration:none;
  }
  .user{
    position: absolute;
    right: 26px;
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


