import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <SectionContainer>
            <section className="register-block">
                <div className="container">
                    <div class="row">
                        <div class="col-md-4 register-sec">
                            <h2 class="text-center">Login</h2>
                            <form class="register-form">
                                <div class="form-group">
                                    <label for="email" class="text-uppercase">Email</label>
                                    <input type="email" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-uppercase">Password</label>
                                    <input type="password" class="form-control" placeholder="" />
                                </div>
                                <div class="form-check">
                                    <button type="submit" class="btn btn-register float-right">Login</button>
                                </div>
                            </form>

                        </div>
                        <div class="col-md-8 banner-sec">
                        </div>
                    </div>
                </div>
            </section>
        </SectionContainer>
    )
}

export default Login;

const SectionContainer = styled.section`
.register-block{
background: #DE6262; 
background: -webkit-linear-gradient(to bottom, #3f4c6b, #3f4c6b);  
background: linear-gradient(to bottom, #aa3600 , rgba(0,0,0,0.9)); 
//float:left;
width:100%;
padding : 50px 0;
padding-top:140px;
}
.banner-sec{
    background:url(https://media-cdn.tripadvisor.com/media/photo-s/0d/99/8d/ae/fancy-a-friendly-meal.jpg)  no-repeat  bottom;
     background-size:cover; 
     min-height:500px; 
     border-radius: 0 10px 10px 0;
      padding:0;
    }
.container{
    background:#fff;
    border-radius: 10px;
    padding-top:0;
    box-shadow:15px 20px 0px rgba(0,0,0,0.3);
}
.register-sec{
    padding: 112px 30px; 
    position:relative;
}
.register-sec .copy-text{
    position:absolute; 
    width:80%;
    bottom:20px; 
    font-size:13px;
    text-align:center;
    }
.register-sec .copy-text i{
    color:#FEB58A;
}
.register-sec .copy-text a{
    color:#E36262;
}
.register-sec h2{
    margin-bottom:30px; 
    font-weight:800; 
    font-size:30px; 
    color: #661f01;
}
.register-sec h2:after{
    content:" ";
     width:100px; 
     height:5px; 
     background:#661f01;
    display:block; 
    margin-top:20px;
    border-radius:3px; 
    margin-left:auto;
    margin-right:auto
    }
.btn-register{
    background: #3f4c6b; 
    color:#fff; 
    font-weight:900;
}
.banner-text{
    width:70%; 
    position:absolute;
     bottom:40px;
      padding-left:20px;
    }
.banner-text h2{
    color:#fff; 
    font-weight:600;
}
.banner-text h2:after{
    content:" ";
     width:100px; 
     height:5px;
      background:#FFF;
       display:block; 
       margin-top:20px; 
       border-radius:3px;
    }
.banner-text p{
    color:#fff;
}
`