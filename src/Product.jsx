import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const id = match.params.id;
    const getSingleItem = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
        setLoad(false);
        console.log(product);
      } catch {}
    };
    getSingleItem();
  }, []);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div>
          <h1>{product.title}</h1>
        </div>
      )}
    </>
  );
};

export default Product;
