import React from "react";
import "./featuredproperties.css";

function FeaturedProperties() {

  return (

    <div className="fp">
    <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="loading" className="fpImg" />
      <span className="fpName">7Seasons Apartments</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting From $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="loading" className="fpImg" />
      <span className="fpName">Cheval Three Quays</span>
      <span className="fpCity">London</span>
      <span className="fpPrice">Starting From $190</span>
      <div className="fpRating">
        <button>9.4</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o=" alt="loading" className="fpImg" />
      <span className="fpName">Zoku Amsterdam</span>
      <span className="fpCity">Amsterdam</span>
      <span className="fpPrice">Starting From $210</span>
      <div className="fpRating">
        <button>9.0</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/227933912.webp?k=ee167ed653a13813d01c3882376a25ee79d4b755b0adef6192f2a48e61f79f7f&o=" alt="loading" className="fpImg" />
      <span className="fpName">Flora Chiado Apartments</span>
      <span className="fpCity">Portugal</span>
      <span className="fpPrice">Starting From $160</span>
      <div className="fpRating">
        <button>8.6</button>
        <span>Excellent</span>
      </div>
      </div>

    </div>

  );
}

export default FeaturedProperties;


// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./featuredproperties.css";

// function FeaturedProperties() {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     },
//   };

//   const properties = [
//     {
//       imgSrc:
//         "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
//       name: "7Seasons Apartments",
//       city: "Madrid",
//       price: "Starting From $120",
//       rating: "8.9",
//     },
//     {
//       imgSrc:
//         "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
//       name: "7Seasons Apartments",
//       city: "Madrid",
//       price: "Starting From $120",
//       rating: "8.9",
//     },{
//       imgSrc:
//         "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
//       name: "7Seasons Apartments",
//       city: "Madrid",
//       price: "Starting From $120",
//       rating: "8.9",
//     },{
//       imgSrc:
//         "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
//       name: "7Seasons Apartments",
//       city: "Madrid",
//       price: "Starting From $120",
//       rating: "8.9",
//     },{
//       imgSrc:
//         "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
//       name: "7Seasons Apartments",
//       city: "Madrid",
//       price: "Starting From $120",
//       rating: "8.9",
//     },{
//       imgSrc:
//         "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=",
//       name: "7Seasons Apartments",
//       city: "Madrid",
//       price: "Starting From $120",
//       rating: "8.9",
//     },
//     // Add more properties here
//   ];

//   return (
//     <div className="fp">
//       <Carousel className="x"
//         swipeable={true}
//         draggable={false}
//         showDots={true}
//         responsive={responsive}
//         ssr={true} // Server-side rendering
//         infinite={true}
//         autoPlay={true}
//         autoPlaySpeed={3000}
//         keyBoardControl={true}
//         customTransition="all .5"
//         transitionDuration={500}
//         containerClass="carousel-container"
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         // deviceType={this.props.deviceType}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//       >
//         {properties.map((property, index) => (
//           <div key={index} className="fpItem">
//             <img src={property.imgSrc} alt="loading" className="fpImg" />
//             <span className="fpName">{property.name}</span>
//             <span className="fpCity">{property.city}</span>
//             <span className="fpPrice">{property.price}</span>
//             <div className="fpRating">
//               <button>{property.rating}</button>
//               <span>Excellent</span>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default FeaturedProperties;

