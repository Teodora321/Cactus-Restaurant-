import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
    return (
        <Container>
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <div className="mb-4 lead">The page you are looking for was not found.</div>
                            <Link to="/" className="btn btn-dark">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}
export default NotFound

const Container = styled.body`
    background: #dedede;
    .page-wrap {
        min-height: 100vh;
    }
    `