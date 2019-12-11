import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Item({ id, handler, type, title, price, description, imageUrl }) {

   

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
                <div className="btn-group">
                    <Link to={`/items/${id}`}>
                        <button className="btn btn-success btn-product glyphicon glyphicon-chevron-right">Details</button>
                    </Link>
                    {/* <Link to='/ite'> */}
                        <button onClick={() =>handler(id)} className="btn btn-success btn-product glyphicon glyphicon-shopping-cart">Add To Cart</button>
                    {/* </Link> */}

                </div>
            </div>
            
        
    
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