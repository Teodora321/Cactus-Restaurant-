import React from 'react';
import styled from 'styled-components';
import Image from './contacts-bg.jpg';


function Contacts() {
    return (
        <ContactsContainer >
            <section style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            </section>
            <div className="bg" style={{ backgroundImage:`url(${Image})`}}>
            <div className="something">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <h1 className="title-page" >
                                Contacts
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="well">
                            <h3 className="h3" ><i className="fa fa-home fa-1x" ></i> Address:</h3>
                            <p className="paragraphs">Area Chaika 257, Sunny Beach, Bulgaria 8240</p>
                            <br />
                            <br />
                            <h3 className="h3"><i className="fa fa-phone" ></i> Phone:</h3>
                            <p className="paragraphs">+359 876 556 629</p>
                            <br />
                            <br />
                            <h3 className="h3"><i className="fa fa-envelope fa-1x"></i> E-Mail:</h3>
                            <p className="paragraphs">info@cactusjaks.com</p>
                            <br />
                            <br />
                            <h3 className="h3"><i className="fa fa-facebook-official" ></i> Facebook</h3>
                            <p className="paragraphs"> <a href="https://www.facebook.com/billykehajov1117/"> Cactus Jak's</a></p>
                           
                        </div>
                    </div>
                    <div className="map-div">
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11727.403661108867!2d27.71603420270735!3d42.70687742374642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a69e3150777f23%3A0xe0b15c9d4032df3e!2sCactus%20Jak&#39;s!5e0!3m2!1sbg!2sbg!4v1575220344410!5m2!1sbg!2sbg" ></iframe>
                    </div>
                </div>
            </div>

            </div>
           
        </ContactsContainer>
    )
}

export default Contacts;

const ContactsContainer = styled.main`
    section{
        padding-top:258px;
    }
    .something{
        padding-bottom:50px;
        padding-top:0px;
    }
    .title-page{
        text-align:center;
        margin-top:10px;
        margin-bottom:10px;
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        line-height:1.2rem;
        color:green;
    }
    .map{
        width:565px;
        height:400px;
        frameborder:0;
        border:0
    }
    .container{
        padding-bottom:100px;
    }
    .h3{
        line-height:1em;
        font-family: Roboto Condensed',Helvetica,Arial,Lucida,sans-serif;
        text-align:left;
        font-weight:800;
        text-transform:uppercase;
        font-size:18px;

    };
    .paragraphs{
        font-size: 20px;
    }
    .well{
        background-color:black;
    }
    .jumbotron {
        background-color:red;
    }
    
    
   

`