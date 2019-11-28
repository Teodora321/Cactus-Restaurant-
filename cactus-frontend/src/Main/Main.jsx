import React, {useState} from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

// function Main() {
//     const [index, setIndex] = useState(0);
//     const [direction, setDirection] = useState(null);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//       setDirection(e.direction);
//     };
  
//   return (
      
//       <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="main-bg.jpg"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="bg.jpg"
//             alt="Second slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="bg1.jpg"
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
      
//     );
      
  // }
  // export default Main;
  
function Main() {
    return (
        <MainContainer>
         <img src="./main-bg.jpg" alt="main" /> 
        </MainContainer>
    )
}
export default Main

const MainContainer = styled.main`
       img{
        width:100%;
        height:100%   
       } 
`