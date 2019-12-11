import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import itemService from '../../services/items-service';
import Image from './bg1.jpg';


class Details extends React.Component {
    state = {
        item: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        itemService.getDetails(id).then(res => {
            //console.log(res)
          this.setState({ item:res});
        });
      }

    render() {
        const { item } = this.state; 
        return ( item &&
            <ProductContainer style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class="container">
                    <div class="card">
                        <div class="container-fliud">
                            <div class="wrapper row">
                                <div class="preview col-md-6">
                                    <img className="image-class" src={item.imageUrl} alt="some alt" />
                                </div>
                                <div class="details col-md-6">
                                    <h3 class="product-title">{item.title}</h3>
                                    <p class="product-description">{item.description}</p>
                                    <h4 class="price">Price: <span>{item.price}BGN</span></h4>
                                    <div class="action">
                                        <button class="add-to-cart btn btn-default" type="button">Add to cart</button>
                                        <Link class="add-to-cart btn btn-default" type="button" to='/items'>Back to menu</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProductContainer>
        )
    }
}
export default Details;

const ProductContainer = styled.main`
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
    flex-grow: 1; }
        
.card {
    margin-top: 50px;
    background: #eee;
    padding: 3em;
    line-height: 1.5em; }
   
.product-title, .price, .sizes, .colors {
    text-transform: UPPERCASE;
     font-weight: bold; }
        
.product-title, .rating, .product-description, .price, .vote, .sizes {    
    margin-bottom: 15px; }

.product-title {
    margin-top: 0; }
        
.size {
    margin-right: 10px; }
    .size:first-of-type {
    margin-left: 40px; }
        
.color {
    display: inline-block;
     vertical-align: middle;
    margin-right: 10px;
    height: 2em;
    width: 2em;
    border-radius: 2px; }
    .color:first-of-type {
    margin-left: 20px; }
        
.add-to-cart, .like {
    background: #3b7524;
    padding: 1.2em 1.5em;
    border: none;
    text-transform: UPPERCASE;
    font-weight: bold;
    color: #fff;
    -webkit-transition: background .3s ease;
    transition: background .3s ease; }
    .add-to-cart:hover, .like:hover {
    background: #ff9f1a;
    color: #fff; }
`


