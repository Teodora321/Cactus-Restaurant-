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
                    <Link to="/about">
                        <li>
                            About
                    </li>
                    </Link>
                    <Link to="/register">
                        <li className='user'>
                            Register
                        </li>
                    </Link>
                    <Link to="/login">
                        <li className='user'>
                            Login
                        </li>
                    </Link> 
                </ul>
            </nav>

        </NavContainer>
    );
}
export default Navigation;

const NavContainer = styled.nav`
  .navbar {
    background: rgba(0,0,0, 0.7);
    padding-top: 6rem;
    color: white;
    top:0;
    width:100%;
    display:flex;
    align-items: center;
    position:absolute;
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
  .user{
    bottom: 0;
    color:red;
    font-size: small;
    padding: 0;
    margin: 12px;
    line-height: normal;
    float: right;
    margin-top: -48px;
    margin-right: 27px;
    padding-right: -11px;
    margin-left: 500p;
    top: 20px;
  }

  #logo{
    position: absolute;
    top: -18px;
    left: 14pt;
    height: 132px;
    width: 161px;


}
 `


