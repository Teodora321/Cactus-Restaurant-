import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';
import Image from './menuitem.jpg';
import itemService from '../../services/items-service';
import UserContext from '../Auth/UserContext'

class Menu extends React.Component {

	static contextType = UserContext;

	constructor(props) {
		super(props)
		this.state = {
			items: [],
			cart: [],

		}
	}
	handleClick = (id) => {
		//this.setState({ cart: [...this.state.cart, id] });

		this.setState((prevState) => {
			console.log(prevState)
			console.log(id)
			return { cart: [prevState.cart.slice(), id]}
		})
		console.log(this.state)
	}

	componentDidMount() {
		itemService.getAll().then(res => {
			this.setState({ items: res })
		})
	}
	render() {
		console.log(this.state)

		return (
			<MenuContainer style={{ backgroundImage: `url(${Image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
				{this.state.cart ? <div>{this.state.cart[0]}</div> : <div>No item in cart</div>}
				<section className="about-area pt-60">
					<div className="container">
						<div className="row">
							<div className="col-xl-12 mb-60">
								<div className="section-title text-center">
									<p>Famous for good food</p>
									<h4>Our menu</h4>
								</div>
							</div>
						</div>
						<div className="row">
							<ul className="nav nav-tabs menu_tab" id="myTab" role="tablist">
								<li className="nav-item">
									<Link to='/salads' className="tabs">Salads</Link>
								</li>
								<li className="nav-item">
									<Link to='/meals' className="tabs">Meals</Link>
								</li>
								<li className="nav-item">
									<Link to='/desserts' className="tabs">Desserts</Link>
								</li>
							</ul>
						</div>
						<div className="row menu_style1">
							<div className="col-md-4">
								{
									this.state.items.map((item) =>
										<Item key={item._id} handler={this.handleClick} id={item._id} imageUrl={item.imageUrl} description={item.description} imageAlt="alt" title={item.title} price={item.price} type={item.type} />
									)}
							</div>
						</div>
					</div>
				</section>
			</MenuContainer>
		)
	}
}

export default Menu;

const MenuContainer = styled.main`
body {
	font-family: 'Montserrat', sans-serif;
	color: #333;
	line-height: 1.6;
}
.mb-60 {
	margin-bottom: 60px;
}

.section-title p {
	color:white
	font-size: 24px;
	font-family: Oleo Script;
	margin-bottom: 0px;
}
.section-title h4 {
	font-size: 40px;
	text-transform: capitalize;
	color: #FF5E18;
	position: relative;
	display: inline-block;
	padding-bottom: 25px;
}
.section-title{
	color:white;
	padding-top:120px;
}
.section-title h4::before {
	
	width: 80px;
	height: 1.5px;
	bottom: 0;
	left: 50%;
	margin-left: -40px;
}
.section-title h4::before, .section-title h4::after {
	position: absolute;
	content: "";
	background-color: #FF5E18;
}

#myTabContent {
	margin-top: 50px;
}
.menu_tab {
	width: auto;
	margin: 0 auto;
}
.nav-tabs .nav-item {
	margin-bottom: -1px;
}
.nav-item a {
	color: white;
	font-size:15px;
}
.menu_tab .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
	color: white;
	background-color: #FF5E18;
	border-color: #FF5E18;
}
.single_menu_list {
	position: relative;
	padding-left: 190px;
	margin-bottom: 110px;
}

.single_menu_list img {
	max-width: 30%;
	position: absolute;
	left: 0px;
	top: 0;
	border: 1px solid #ddd;
	padding: 3px;
	border-radius: 50%;
	transition: .4s
}

.single_menu_list:hover img {
	border-radius: 0;
	transition: .4s
}

.single_menu_list h4 {
	font-size: 20px;
	border-bottom: 1px dashed #333;
	padding-bottom: 15px;
	margin-bottom: 10px;
}

.single_menu_list h4 span {
	float: right;
	font-weight: bold;
	color: #FF5E18;
	font-style: italic;
}
.tabs:hover{
	background-color:#ff5e18;
}


`