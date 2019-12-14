import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import ItemInCart from './ItemInCart';
import Image from './bg1.jpg';
import UserContext from '../Auth/UserContext';
import userService from '../../services/user-service';

function Cart(){
    const history = useHistory();
    const [user] = useContext(UserContext);

    const handleClick = () => {
        history.push('/')
    }
    
        let total = 0;
        return (
            <CartContainer style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <div className="panel-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                            </div>
                                            <div className="col-xs-6">
                                                <Link to='/items'>
                                                    <button type="button" className="btn btn-success btn-block">
                                                        <span className="glyphicon glyphicon-share-alt"></span> Continue shopping
								                     </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <ItemInCart />
                                </div>
                                <div className="panel-footer">
                                    <div className="row text-center">
                                        <div className="col-xs-9">
                                            {user.cart && user.cart.map(item => {
                                                total += item.price
                                            })}
                                            <h4 className="text-right">Total {total}<strong> BGN</strong></h4>
                                        </div>
                                        <div className="col-xs-3">
                                                <button onClick={handleClick}  className="btn btn-success btn-block">
                                                    Checkout
							                    </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CartContainer>

        )
    }

export default Cart;

const CartContainer = styled.main`
padding-top: 200px;
padding-bottom: 100px;
padding-left: 100px;
padding-right: 100px;
img {
    max-width: 100%; }   
.preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;      
    flex-direction: column; }
    @media screen and (max-width: 996px) {
    .preview {
    margin-bottom: 20px; } }
        
.preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1; 
}
.row {
        margin-top: 50px;
        background: rgba(0,0,0,0.2);
        padding: 3em;
        line-height: 1.5em;
     }
}
`