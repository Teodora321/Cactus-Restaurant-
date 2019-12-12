import React, { Fragment, useContext } from 'react';
import UserContext from '../Auth/UserContext';


function ItemInCart() {

    const [user, setUserStatus] = useContext(UserContext);
    //imageUrl, description, title, price ?quantity;
    console.log(user.cart)

    return (
        // <Fragment>
    <div>
        {
            user.cart  &&   user.cart.map(item => {
                return (
                    <div className="row">
                        <div className="col-xs-2"><img className="img-responsive" src={item.imageUrl} alt="some" />
                        </div>
                        <div className="col-xs-4">
                            <h4 className="product-name"><strong>{item.title}</strong></h4><h4><small>{item.description}</small></h4>
                        </div>
                        <div className="col-xs-6">
                            <div className="col-xs-6 text-right">
                                <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                            </div>
                            <div className="col-xs-4">
                                <input type="text" className="form-control input-sm" value="1" />
                            </div>

                        </div>
                    </div>
                )
            })
        }

</div>
        {/* </Fragment> */}
    )
}
export default ItemInCart;