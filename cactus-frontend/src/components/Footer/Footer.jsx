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
                            <h4>About us</h4>
                            <ul className="list-unstyled">
                                <p>
                                    Now you can subscribe and receive notification about party nights,
                                    promotions, facebook games with awards and
                                    everything about Cactus Jak's Bar & Grill.
                              </p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/billykehajov1117/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                                    <a href="https://www.facebook.com/billykehajov1117/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                                    <a href="https://www.facebook.com/billykehajov1117/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                                    <a href="https://www.facebook.com/billykehajov1117/"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                                </div>
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
    background: black;
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
        color: #96281e;
        text-decoration:none;
 }
 .social-icons{
    
    margin: 0;
    padding: 0;
    font-size : 10px;
}

.social {
    margin:7px 7px 7px 0px;
    color:#fff;
}
#social-fb:hover {
     color: #96281e;
     transition:all .25s;
 }
 #social-tw:hover {
     color: #96281e;
     transition:all .25s;
 }
 #social-gp:hover {
     color: #96281e;
     transition:all .25s;
 }
 #social-em:hover {
     color: #96281e;
     transition:all .25s;
 }
`;