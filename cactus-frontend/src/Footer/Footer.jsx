import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle" >
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Subscribe</h4>
                            <ul className="list-unstyled">
                                <li>
                                    Now you can subscribe and receive notification about party nights,
                                    promotions, facebook games with awards and
                                    everything about Cactus Jak's Bar & Grill.
                              </li>
                                <li>
                                    <input placeholder="Email"></input>
                                </li>
                                <li>
                                    <button className="subscribe">SUBSCRIBE!</button>
                                </li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Cactus Jak's Bar & Grill</h4>
                            <ul className="list-unstyled">
                                <Link to='menu'><li> Menu</li></Link>
                                <Link to='contacts'><li> Contacts</li></Link>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Conditions</h4>
                            <ul className="list-unstyled">
                                <Link to='/terms'>
                                    <li> Terms of use  </li>
                                </Link>
                                <Link to='/privacy'>
                                    <li> Privacy Policy</li>
                                </Link>
                                <Link to='cookies'>
                                    <li> Cookies Policy</li>
                                </Link>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Rate Us On Tripadvisor</h4>
                            <ul className="list-unstyled">
                                <img src="./qr-cactus.png" alt="qr-code" style={{ width: '99px' }}></img>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; 2019 - All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}
export default Footer;

const FooterContainer = styled.footer`
// .main-footer{
//     background: rgba(0,0,0, 0.7);
//     padding-top: 2rem;
//     color: white;
//     position: absolute;
//     //vertical-align: bottom;
//     bottom: 0;
//     width:100%;
// }
  .footer-middle {
    text-align: -moz-center;
    background: rgba(0,0,0, 0.8);
    padding-top: 1rem;
    color: white;
    //position: fixed;
    vertical-align: bottom;
    bottom: 0px;
    width:100%;
  }
  .footer-bottom {
    background: rgba(0,0,0, 0.8)
    padding-top: 3rem;
  }
  ul li {
    color: white;
    font-size:1.2rem;
  }
  ul li{
      font-size:1.2rem;
  }
 ul li:hover {
        color: #8a261d;
        text-decoration:none;
 }
  
  .subscribe{
      color:white;
      background:black;
  }
  ul li input{
      color:black
  }
`;