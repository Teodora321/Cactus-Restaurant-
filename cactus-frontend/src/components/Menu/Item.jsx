import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Item({ id, type, title, price, description, imageUrl }) {

    return (
        <ImageContainer>
            <div className="single_menu_list">
                <img className="image-class" src={imageUrl} alt="some alt" />
                <div className="menu_content">
                    <h4>
                        {title}
                        <span> {price} </span>
                    </h4>
                    <p>{description}</p>
                </div>
                <div class="btn-group">
                    <Link to={`/menu/${id}`}>
                        <button className="btn btn-success btn-product glyphicon glyphicon-chevron-right">Details</button>
                    </Link>
                    <Link to='/'>
                        <button className="btn btn-success btn-product glyphicon glyphicon-shopping-cart">Add To Cart</button>
                    </Link>

                </div>
            </div>
            
        
    }
        </ImageContainer>
    )
}

export default Item;

const ImageContainer = styled.div`
    padding-top:100px;
.menu_content{
    color:white;
}


`