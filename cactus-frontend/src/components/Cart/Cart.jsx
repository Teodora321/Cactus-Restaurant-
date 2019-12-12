import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from './bg1.jpg';
import UserContext from '../Auth/UserContext';

class Cart extends React.Component {

    static contextType = UserContext;

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const user = this.context;
        console.log(user[0].cart)

    }

    render() {
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
                                    <div className="row">
                                        <div className="col-xs-2"><img className="img-responsive" src="http://placehold.it/100x70" alt="some" />
                                        </div>
                                        <div className="col-xs-4">
                                            <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="col-xs-6 text-right">
                                                <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                            </div>
                                            <div className="col-xs-4">
                                                <input type="text" className="form-control input-sm" value="1" />
                                            </div>
                                            <div className="col-xs-2">
                                                <button type="button" className="btn btn-link btn-xs">
                                                    <span className="glyphicon glyphicon-trash"> </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-2"><img className="img-responsive" src="http://placehold.it/100x70" alt='some' />
                                        </div>
                                        <div className="col-xs-4">
                                            <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="col-xs-6 text-right">
                                                <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                            </div>
                                            <div className="col-xs-4">
                                                <input type="text" className="form-control input-sm" value="1" />
                                            </div>
                                            <div className="col-xs-2">
                                                <button type="button" className="btn btn-link btn-xs">
                                                    <span className="glyphicon glyphicon-trash"> </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <div className="row text-center">
                                        <div className="col-xs-9">
                                            <h4 className="text-right">Total <strong>$50.00</strong></h4>
                                        </div>
                                        <div className="col-xs-3">
                                            <button type="button" className="btn btn-success btn-block">
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
