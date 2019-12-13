import React, { Fragment, useContext } from 'react';
import UserContext from '../Auth/UserContext';


function ItemInCart() {

    const [user, setUserStatus] = useContext(UserContext);
    console.log(user)

    return (
        <Fragment>
            {
                user.cart && user.cart.map(item => {
                    return (
                        <div className="row">
                            <div className="col-xs-2"><img className="img-responsive" src={item.imageUrl} alt="some" />
                            </div>
                            <div className="col-xs-4">
                                <h4 className="product-name"><strong>{item.title}</strong></h4><h4><small>{item.description}</small></h4>
                            </div>
                            <div className="col-xs-6">
                                <div className="col-xs-6 text-right">
                                    <h6><strong>{item.price.toFixed(2)} <span className="text-muted">BGN</span></strong></h6>
                                </div>

                                <div class="col-xs-2">
                                    <button type="button" className="btn btn-link btn-xs">
                                        <span class="glyphicon glyphicon-trash"> </span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
export default ItemInCart;