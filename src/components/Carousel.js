import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block carousel w-100"
          src="https://i.imgur.com/Bi6DE9r.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carousel-text'>Hunter X Hunter</h3>
          <p className='carousel-text'>Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel w-100"
          src="https://i.imgur.com/v8IHOFa.gif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='carousel-text'>Attack On Titan</h3>
          <p className='carousel-text'>After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel w-100"
          src="https://i.imgur.com/Vr0XZop.gif"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='carousel-text'>Initial D</h3>
          <p className='carousel-text'>The story of a young delivery boy who becomes a drift-racing legend.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;

// import Carousel from 'react-bootstrap/Carousel';

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block carousel w-100"
//           src="https://i.imgur.com/Bi6DE9r.gif"
//           alt="First slide"
//         />
//         {/* <Carousel.Caption> */}
//           {/* <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         {/* </Carousel.Caption> */}
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block carousel w-100"
//           src="https://i.imgur.com/v8IHOFa.gif"
//           alt="Second slide"
//         />

//         {/* <Carousel.Caption> */}
//           {/* <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//         {/* </Carousel.Caption> */}
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block carousel w-100"
//           src="https://i.imgur.com/Vr0XZop.gif"
//           alt="Third slide"
//         />


          
//         {/* <Carousel.Caption> */}
//           {/* <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p> */}
//         {/* </Carousel.Caption> */}
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;