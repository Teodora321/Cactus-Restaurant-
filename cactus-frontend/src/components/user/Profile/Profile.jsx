import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../Auth/UserContext';
import userServices from '../../../services/user-service';
import { Form, Field } from "react-final-form";
import { useHistory } from 'react-router-dom';


function Profile() {

    const history = useHistory();

    const [user, setUserStatus] = useContext(UserContext);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        userServices.getOne(user.userId)
            .then(data =>
                setUserInfo(data))
            .catch(err => console.log(err))
    }, []);

    const updateProfile = values => {
        userServices.updateUser(user.userId, values)
            .then(modifiedUser => {
                history.push('/')
            })
            .catch(err => console.log(err))

    }

    const deleteUser = () => {
        userServices.deleteUser(user.userId)
            .then(() => {
                setUserStatus({ loggedIn: false, userId: '' })
                history.push("/")
            })
            .catch(err => console.log(err))
    }


    return (
        <ProfileContainer>
            <section className="register-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 register-sec">
                            <h2 className="text-center">Profile</h2>
                            <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                                <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" class="img-circle img-responsive" />
                            </div>
                            <Form
                                onSubmit={updateProfile}
                                initialValues={userInfo}
                                render={({ handleSubmit, pristine, form, submitting, values }) => {
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <div className='form-group'>
                                                <label className='text-uppercase'>Name</label>
                                                <Field
                                                    name="name"
                                                    component="input"
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label className='text-uppercase from-control'>Email</label>
                                                <Field
                                                    name="email"
                                                    component="input"
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label className='text-uppercase'>Address</label>
                                                <Field
                                                    name="address"
                                                    component="input"
                                                />
                                            </div>
                                            <div className="buttons">
                                                <button className="btn btn-register float-right" onClick={(ev) => { ev.preventDefault(); handleSubmit(); }} type="submit" disabled={submitting || pristine} >
                                                    Update Profile
                                                 </button>
                                            </div>
                                            <div>
                                                <button className="btn btn-register float-right" onClick={deleteUser}> Delete Frofile</button>
                                            </div>

                                        </form>
                                    )
                                }}
                            />
                        </div>
                        <div className="col-md-8 banner-sec">
                        </div>
                    </div>
                </div>
            </section>
        </ProfileContainer>
    )
}

export default Profile

const ProfileContainer = styled.section`
.register-block{
    background: #DE6262; 
    background: -webkit-linear-gradient(to bottom, #3f4c6b, #3f4c6b);  
    background: linear-gradient(to bottom, #5a3f33  , rgba(0,0,0,0.9)); 
    //float:left;
    width:100%;
    padding : 50px 0;
    padding-top:140px;
    }
    .banner-sec{
        background:url(https://i.pinimg.com/originals/f3/0b/aa/f30baad5130286d75dad6f7fffecaa10.jpg)  no-repeat  bottom;
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
        background: #49352c; 
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

.buttons{
padding-left: 100px;
margin-top: 50px;
margin-bottom: 50px;
margin-left: 50px;
 margin-right: 137px;
    }
    
`



