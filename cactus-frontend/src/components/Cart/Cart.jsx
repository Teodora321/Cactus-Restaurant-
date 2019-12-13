import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import ItemInCart from './ItemInCart';
import Image from './bg1.jpg';
import UserContext from '../Auth/UserContext';
import userService from '../../services/user-service';

class Cart extends React.Component {

    static contextType = UserContext;


    // const [user, setUserStatus] = this.context;

    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }

    }
    handleClick = () => {
       
        const [user, setUserStatus] = this.context;
        const userId = user.userId;
        this.setState((prevState) => {
            console.log(prevState)
            return {cart:[this.cart]}
        })
        userService.deleteAll({ userId }).then(modifiedUser => {
            console.log(modifiedUser)
            setUserStatus({ ...user, ...modifiedUser });
            const history = useHistory();
            history.push('/')
            console.log(this.state)

        }).catch(err => console.log(err))
        console.log(this.state)
    }
    
    render() {
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
                                            {this.state.cart && this.state.cart.map(item => {
                                                total += Number(this.state.cart.price)
                                            })}
                                            <h4 className="text-right">Total {total}<strong> BGN</strong></h4>
                                        </div>
                                        <div className="col-xs-3">
                                                <button onClick={this.handleClick}  className="btn btn-success btn-block">
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