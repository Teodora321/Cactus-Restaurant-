import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { useHistory, Link } from 'react-router-dom';

import userServices from '../../../services/user-service';
import styled from 'styled-components';


const registerValidations = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Please, enter your email!'
    } else if (values.email.length < 6) {
        errors.email = 'Please, enter a valid email!'
    }
    if (!values.password) {
        errors.password = 'Please, enter your password'
    } else if (values.password.length < 5) {
        errors.password = 'Your password is too week!'
    }
    if (!values.name) {
        errors.name = 'Please, enter your name!'
    }
    if (!values.rePassword) {
        errors.rePassword = 'Please enter your re-password!'
    } else if (values.password !== values.rePassword) {
        errors.confirm = 'Both passwords should match!'
    }
    return errors
}

function Register() {
    const history = useHistory();


    const onSubmit = (values) => {
        userServices.register(values)
            .then(() => history.push("/login"))
            .catch(err => {
                console.log(err);
            });

    };

    return (
        <SectionContainer>
            <section className="register-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 register-sec">
                            <h2 className="text-center">Register</h2>
                            <Form
                                validate={registerValidations}
                                onSubmit={onSubmit}
                                render={({ handleSubmit, submitting }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Field name="email">
                                            {({ input, meta }) => (
                                                <>
                                                    <div className="form-group">
                                                        <label className="text-uppercase">Email</label>
                                                        <input className="form-control" {...input} type="text" />
                                                    </div>
                                                    <p> {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                                </>
                                            )}
                                        </Field>
                                        <Field name="name">
                                            {({ input, meta }) => (
                                                <>
                                                    <div className="form-group">
                                                        <label className="text-uppercase">Name</label>
                                                        <input className="form-control" {...input} type="text" />
                                                    </div>
                                                    <p>{meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                                </>
                                            )}
                                        </Field>
                                        <Field name="address">
                                            {({ input, meta }) => (
                                                <>
                                                    <div className="form-group">
                                                        <label className="text-uppercase">Address</label>
                                                        <input className="form-control" {...input} type="text" />
                                                    </div>
                                                    <p> {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                                </>
                                            )}
                                        </Field>
                                        <Field name="password">
                                            {({ input, meta }) => (
                                                <>
                                                    <div className="form-group">
                                                        <label className="text-uppercase">Password</label>
                                                        <input className="form-control" {...input} type="password" />
                                                    </div>
                                                    <p> {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                                </>
                                            )}
                                        </Field>
                                        <Field name="rePassword">
                                            {({ input, meta }) => (
                                                <>
                                                    <div className="form-group">
                                                        <label className="text-uppercase">Re-Password</label>
                                                        <input className="form-control" {...input} type="password" />
                                                    </div>
                                                    <p> {meta.error && meta.touched && <span>{meta.error}</span>}</p>
                                                </>
                                            )}
                                        </Field>
                                        <div>
                                            <button className="btn btn-register float-right" type='submit' onClick={(event) => { event.preventDefault(); handleSubmit(); }}>
                                                <Link to='/'>Register</Link>
                                            </button>
                                        </div>

                                    </form>
                                )}
                            />
                        </div>
                        <div className="col-md-8 banner-sec">
                        </div>
                    </div>
                </div>
            </section>
        </SectionContainer>

    )
}


export default Register;

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
    background:url(http://www.uncleulispub.com/wp-content/uploads/2019/07/fancy_restaurant.jpg)  no-repeat  bottom;
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



