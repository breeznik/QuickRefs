import { useEffect } from "react";
import CardComponent from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/statusCode";

const Product = () => {
  const { data: products, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch an action for fetchProducts
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <h1>loading</h1>;
  }
  if (status === StatusCode.ERROR) {
    return <h1>something went wrong</h1>;
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Product dashboard</h1>
      <div>
        <div className="row justify-content-center">
          {products?.map((product) => {
            return (
              <div key={product.id} className="col col-md-3 my-2 mx-2">
                <CardComponent product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
