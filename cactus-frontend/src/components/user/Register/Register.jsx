import React, { Component } from "react";
import { Form } from "react-final-form";
import { Redirect } from 'react-router-dom';

import InputField from '../sharedField';
import userServices from '../../../services/user-service';
import styled from 'styled-components';



class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasRegistred: false
        }
    }

    onSubmit = values => {
        const { email, name, adress, password } = values;
        const data = { email, name, adress, password };
        console.log(data);

        userServices.register(data)
            .then(res => {
                console.log(res)
                this.setState({ hasRegistred: true })
            }
            )
            .catch(err => console.log(err))

    };

    render() {
        return (
            <SectionContainer>
            <section className="register-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 register-sec">
                            <h2 className="text-center">Register</h2>
                            <Form 
                                onSubmit={this.onSubmit}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = "Required!";
                                    }

                                    if (!values.name) {
                                        errors.name = "Required!";
                                    }
                                    if (!values.adress) {
                                        errors.adress = "Required!";
                                    }
                                    if (!values.password) {
                                        errors.password = "Required!";
                                    }

                                    if (!values.rePassword) {
                                        errors.rePassword = "Required!";
                                    } else if (values.rePassword !== values.password) {
                                        errors.rePassword = "Both passwords must match!";
                                    }
                                    return errors;
                                }}
                                render={({ handleSubmit, submitting, values }) => (

                                    <form className="form-group">
                                        <InputField name="email" label={'Email:'} type='text' />
                                        <InputField name="name" label={'Name:'} type='text' />
                                        <InputField name="adress" label={'Adress:'} type='text' />
                                        <InputField name="password" label={'Password:'} type='password' placeholder={'Password'} />
                                        <InputField name="rePassword" label={'Re-Password:'} placeholder={'Re-Password'} type='password' />

                                        <div className="button">
                                            <button onClick={(event) => { event.preventDefault(); handleSubmit(); }} disabled={submitting}>
                                                Register
                                            </button>
                                            {
                                                this.state.hasRegistred ? <Redirect to='/login' /> : <Redirect to='/register' />
                                            }
                                        </div>
                                        {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
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



