import React from 'react';
import styled from 'styled-components';

class Profile extends React.Component {


    render() {
        return (
            <ProfileContainer>
                <div class="container">
                    <div class="row">
                        <div class="panel panel-default">
                            <div class="panel-heading">  <h4 >User Profile</h4></div>
                            <div class="panel-body">
                                <div class="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                                    <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" class="img-circle img-responsive" />
                                </div>
                                <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8" >
                                    <div class="container" >
                                        <h2>Name:</h2>
                                        <h3 > Email: </h3>
                                        <h3> Address: </h3>
                                        <h3> Password:</h3>
                                        <h3> Re-Password</h3>
                                    </div>
                                </div>
                                <div>
                                    <button>Edit</button>
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileContainer>
        )
    }
}

export default Profile;


const ProfileContainer = styled.main`
            padding-top:150px;
            padding-bottom:150px;
        
            
`;