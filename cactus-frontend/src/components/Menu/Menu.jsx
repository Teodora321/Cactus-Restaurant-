import React from 'react';
import styled from 'styled-components';
import SingleItem from './SingleItem';

function Menu() {
    return (
        <MenuContainer>
           <body>
          <section class="about-area pt-60">
         <div class="container">
            <div class="row">
               <div class="col-xl-12 mb-60">
                  <div class="section-title text-center">
                     <p>Famous for good food</p>
                     <h4>our menu</h4>
                  </div>
               </div>
            </div>
            <div class="row menu_style1">
               <div class="col-md-4">
					<SingleItem/>
                            </div>
                        </div>
                    </div>
                </section>
                </body>
        </MenuContainer>
    )
}
export default Menu;

const MenuContainer = styled.section`
body {
	font-family: 'Montserrat', sans-serif;
	color: #333;
	line-height: 1.6;
}
.mb-60 {
	margin-bottom: 60px;
}
.section-title p {
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
	color: #333;
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

`