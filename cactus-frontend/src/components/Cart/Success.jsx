import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Success() {
    return (
        <SuccessContainer>
        <div class="row text-center">
            <div class="col-sm-6 col-sm-offset-3">
                <h2 className='styleh2'>Congratulations</h2>
                <img alt='alt' src="http://osmhotels.com//assets/check-true.jpg" />
                <h3>Dear, Faisal khan</h3>
                <p className='stylep'>
                    Thank you for verifying your Mobile No.We have sent you an email "faisalkhan.chat@gmail.com" with your details
                    Please go to your above email now and login.
                </p>
                <Link to='/'>
                    <button className="btn btn-success">
                        Home
                    </button>
                </Link>

            </div>
            </div>
            </SuccessContainer>

    )
}

export default Success;

const SuccessContainer = styled.main`

    .stylep{
        font-size:20px;
        color:#5C5C5C;
    }
    .styleh2{
        color:#0fad00"
    }
`