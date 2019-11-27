import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import styled from 'styled-components';
import { DropdownButton, Dropdown } from 'react-bootstrap';
function Navigation() {
    return (
        <NavContainer className="main-nav">
            <nav className="navbar" >
                <ul className="list-unstyled row" >
                    <li>
                        <img src="./cactus-logo.png" alt="logo" id="logo" />
                    </li>
                    <li> 
                        <DropdownButton className="primary" id="dropdown-basic-button" title="Menu">
                            <Dropdown.Item  href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item  href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item  href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <a href="/"> Home</a>
                    </li>
                    <li>
                        <a href="/"> Contacts</a>
                    </li>
                    <li>
                        <a href="/"> About</a>
                    </li>
                   
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
    position:absolute;
    top:0;
    width:100%;
  }
  ul li a {
    color: white;
    margin: 0 5rem;
    font-size: 1.5rem;
    padding: 0 5 rem;
  }
  ul li a:hover {
    color: red;
    text-decoration:none;
  }
  #dropdown-basic-button {
    color: white;
    background:#7b302b;
    border-color: black;
    margin: 0 4rem;
    font-size: 1.5rem;
  }
 .dropdown-item{
    color:black;
    margin:0;
    line-height:2.5;
  }
  #logo{
    position: absolute;
    top: -18px;
    left: 14pt;
    height: 132px;
    width: 161px;
}
 `


