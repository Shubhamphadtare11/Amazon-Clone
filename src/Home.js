import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* Product, id, title, price, rating, image */}
       
        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price={11.96}
            rating={5}
            image={
              "https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png"
            }
          />
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price={11.96}
            rating={5}
            image={
              "https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png"
            }
          />
         
        </div>

        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price={11.96}
            rating={5}
            image={
              "https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png"
            }
          />
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price={11.96}
            rating={5}
            image={
              "https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png"
            }
          />
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price={11.96}
            rating={5}
            image={
              "https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price={11.96}
            rating={5}
            image={
              "https://media.shortform.com/covers/png/the-lean-startup-cover@8x.png"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Home;
