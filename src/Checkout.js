import React from "react";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* List out all of the Checkout Products */}
            {basket.map((item) => {
                console.log(item)
            return (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            )})}
          </div>
        )}
        </div>
        {basket.length>0 &&(
            <div className="checkout_right">
               
                <Subtotal/>
            </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
