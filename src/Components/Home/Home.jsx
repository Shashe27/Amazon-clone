import React from 'react'
import Product from '../Product/Product';
import "./Home.css"
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71tIrZqybrL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price="1100.96"
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="LOUISA SECRET Infinity Heart Necklaces for Women Gold Plated Birthday Anniversary Jewelry Gift for Her Wife Mom"
            price={109}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/S/al-na-9d5791cf-3faf/672ae2e3-d22a-4295-bd89-3b35e9e408a3._CR0,0,1200,628_SX460_QL70_.jpg"
          />
          <Product
            id="49538094"
            title="30 & 5 Minute Gravity Hourglasses - Time Management Set - Deep Black & Snow White"
            price={1855}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51jZ4+qJXwL._AC_UL320_.jpg
"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={99.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          />
          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="New Speed Limit - Trucks Peel and Stick Wall Decals, Multicolor"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71g7IQ7NleL._AC_UL320_.jpg"
          />
          <Product
            id="90829332"
            title="Disney Pixar Cars 3 Peel and Stick Wall Decals , Red"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61kuSe+8SKL._AC_UL320_.jpg"
          />
          <Product
            id="90829332"
            title="GE LED Vintage Night Light, Plug-in, Dusk-to-Dawn, Farmhouse, Rustic, Home Décor, UL-Certified, Ideal"
            price={84.98}
            rating={4}
            image="	https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/812qtT-VAXL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="490385012"
            title="8.5 Inches Cross made of olive wood in Jerusalem the Holy Land, perfect as a Religious Gift, Housewarming Gift, New"
            price={499.99}
            rating={4}
            image="	https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41pxbacG33L._AC_UL320_.jpg"
          />
          <Product
            id="9990385023"
            title="EcoNour Car Windshield Sun Shade with Storage Pouch | Durable 240T Material Car Sun Visor for UV Rays and Sun Heat Protection | Car Interior Accessories for Sun Heat | Standard (64 inches x 32 inches)"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81cKgyRcl6L._AC_SX425_.jpg"
          />
          <Product
            id="325435434534"
            title="Toland Home Garden 28x40 Inch Double Sided Garden Flag Fall Flag, Farm Pumpkin Fall Garden Flag House Flag For Outdoor"
            price={598.99}
            rating={4}
            image="	https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81d3B9bWI+S._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Iphone 14 pro case"
            price={1094.98}
            rating={4}
            image="		https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61BMlv1la7L._AC_UL400_.jpg"
          />
          <Product
            id="90829332"
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video,"
            price={796.98}
            rating={4}
            image="	https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61U6oC65TTL._AC_UY218_.jpg"
          />
          <Product
            id="90829332"
            title="Iphone 13 case"
            price={1094.98}
            rating={4}
            image="	https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81gaD2Mt4bL._AC_UL400_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home