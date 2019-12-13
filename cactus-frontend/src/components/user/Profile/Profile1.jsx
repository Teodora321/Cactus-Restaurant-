import React, { Fragment, useContext, useState, useEffect } from 'react';
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


    const onSubmit = values => {
        userServices.updateUser(user.userId, values)
            .then(res => {
                //todo
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
            <Form
                onSubmit={onSubmit}
                initialValues={userInfo}
                render={({ handleSubmit, pristine, form, submitting, values }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name</label>
                                <Field
                                    name="name"
                                    component="input"
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <Field
                                    name="email"
                                    component="input"
                                />
                            </div>
                            <div>
                                <label>Address</label>
                                <Field
                                    name="address"
                                    component="input"
                                />
                            </div>

                            <div className="buttons">
                                <button onClick={(ev) => { ev.preventDefault(); handleSubmit(); }} type="submit" disabled={submitting || pristine} >
                                    Update Profile
                                </button>

                            </div>
                            <div>
                                <button onClick={deleteUser}> Delete Profile</button>
                            </div>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    )
                }}
            />
             </ProfileContainer> 
            )
        }

export default Profile

const ProfileContainer = styled.div`
padding-top:200px;

`

