import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "./Card";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <div className="row">
      {products.map((product , index) => {
        return (
          <div key={index} className="col col-md-3 my-2 mx-2">
            <CardComponent product={product} cart={true} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
