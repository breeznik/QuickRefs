import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice";

const CardComponent = ({ product, cart = false }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <Card
      className="d-flex align-items-center w-100 p-2 shadow"
      style={{ width: "18rem" }}
    >
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "100px", height: "130px" }}
      />
      <Card.Body className="text-center">
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text> inr {product.price}</Card.Text>
        <Button
          onClick={() => {
            if (cart) {
              removeFromCart(product.id);
              return
            }
            addToCart(product);
          }}
          variant="primary"
        >
          {cart ? "Remove" : "Add to Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
