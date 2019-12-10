import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SingleItem = (props) => {
    const items = props.items;
    // { id, type, title, price, description, imageUrl } = props;
    return (
        <ImageContainer>
            {
                items.map(item => {
                    return (
                        <div className="single_menu_list">
                            <img className="image-class" src={item.imageUrl} alt="some alt" />
                            <div className="menu_content">
                                <h4>
                                    {item.title}
                                    <span> {item.price} </span>
                                </h4>
                                <p>{item.description}</p>
                            </div>
                            <div class="btn-group">
                                <Link to={`/item/${item._id}`}>
                                    <button className="btn btn-success btn-product glyphicon glyphicon-chevron-right">Details</button>
                                </Link>
                                <Link to='/'>
                                    <button className="btn btn-success btn-product glyphicon glyphicon-shopping-cart">Add To Cart</button>
                                </Link>

                            </div>
                        </div>
                    )
                })
            }
        </ImageContainer>
    )
}

export default SingleItem;

const ImageContainer = styled.div`
    padding-top:100px;
.menu_content{
    color:white;
}


`