import React from 'react';
import styled from 'styled-components';
import userService from '../../../services/user-service';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            adress: '',
            password: '',
            rePassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        const newUser = {
             email: this.state.email,
             name : this.state.name,
             adress : this.state.adress,
             password : this.state.password,
             rePassword : this.state.rePassword
        }
            userService.register(newUser).then(res => {
            this.props.history.push(`/login`)
          })
    }

        render() { 
               return ( <SectionContainer>
                    <section className="register-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 register-sec">
                                    <h2 className="text-center">Register</h2>
                                    <form className="register-form" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label className="text-uppercase">Email</label>
                                            <input type="email"  name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-uppercase">Name</label>
                                            <input name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label className="text-uppercase">Adress</label>
                                            <input name="adress" className="form-control" value={this.state.adress} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-uppercase">Password</label>
                                            <input name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-uppercase">Re - Password</label>
                                            <input name="rePassword" className="form-control" value={this.state.rePassword} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-check">
                                            <button type="submit" className="btn btn-register float-right">Register</button>
                                        </div>

                                    </form>
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



