import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from './MENU1.png';

function Success() {
    return (
        <SuccessContainer style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

            <h1 className='styleh1'>
                Thank you!
            </h1>
            <Link to='/'>
                <div className='btn'>
                    <button className="btn btn-success btn-lg">
                        Home
                    </button>
                </div>
            </Link>


        </SuccessContainer>

    )
}

export default Success;

const SuccessContainer = styled.section`
    width: 1440px;
    height: 700px;

    .stylep{
        font-size:20px;
        color:#5C5C5C;
    }
    .styleh2{
        color:#0fad00"
    }
    .styleh1{

        padding-top:200px;
        color:white;
        font-size:150px;
    }
    .btn{
        padding-top:300px;
    }

`