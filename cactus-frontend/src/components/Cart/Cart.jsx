import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Image from './bg1.jpg'

function Cart() {
    return (
        <CartContainer style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div class="container">
                <div class="row">
                    <div class="col-xs-8">
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                        </div>
                                        <div class="col-xs-6">
                                            <Link to='/menu'>                             
                                            <button type="button" class="btn btn-success btn-block">
                                            <span class="glyphicon glyphicon-share-alt"></span> Continue shopping
								            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-2"><img class="img-responsive" src="http://placehold.it/100x70" alt="some"/>
                                    </div>
                                    <div class="col-xs-4">
                                        <h4 class="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="col-xs-6 text-right">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control input-sm" value="1" />
                                        </div>
                                        <div class="col-xs-2">
                                            <button type="button" class="btn btn-link btn-xs">
                                                <span class="glyphicon glyphicon-trash"> </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-2"><img class="img-responsive" src="http://placehold.it/100x70" alt='some'/>
                                    </div>
                                    <div class="col-xs-4">
                                        <h4 class="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                                    </div>
                                    <div class="col-xs-6">
                                        <div class="col-xs-6 text-right">
                                            <h6><strong>25.00 <span class="text-muted">x</span></strong></h6>
                                        </div>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control input-sm" value="1" />
                                        </div>
                                        <div class="col-xs-2">
                                            <button type="button" class="btn btn-link btn-xs">
                                                <span class="glyphicon glyphicon-trash"> </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="row text-center">
                                    <div class="col-xs-9">
                                        <h4 class="text-right">Total <strong>$50.00</strong></h4>
                                    </div>
                                    <div class="col-xs-3">
                                        <button type="button" class="btn btn-success btn-block">
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
