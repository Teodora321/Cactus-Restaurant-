import React, {useState} from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
  
function Main() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
  return (
      <MainContainer>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-bg1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="title">Welcome to CACTUS JAK'S Bar & Grill</h3>
            <p className="content">It's a glad welcome we bring to you this morning, filled with the desires, hopes and dreams we all share.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="main-bg.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className="title"></h3>
            <h2 className="content">It's our pleasure to extend a cheerful welcome to you all! Your presence makes us very happy.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel-bg2.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className="title"></h3>
            <h3 className="content">
            Ladies and gentlemen,the tables are set. The band is playing our theme song. And the waiting staff are preparing to take your orders.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </MainContainer>
    );
      
  }
export default Main;
  
const MainContainer = styled.main`
    .title{
      font-size:4.5rem;
      margin-top:-370px;
      font-family:"Times New Roman", Times, serif; 
      font-weight:1000;
      color:white;
      font-style:italic;
      text-shadow: 2px 2px rgba(90,16,10,0.8)

    }
    .content{
      font-size:3.5rem;
      font-family:"Times New Roman", Times, serif;
      font-style:italic;
      text-shadow: 2px 2px rgba(120,16,10,0.8)
    }
    .carousel-caption{
      margin-top: -200px;
    }
    .carousel-indicators{
      margin-top: -200px;
    }
`
