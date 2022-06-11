import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import "./style.css";

const Proudcts = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
        setLoad(false);
      } catch {
        console.log("err");
      }
    };
    getData();
    console.log(data);
  }, []);
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="conatiner">
          {data.map((i) => (
            <div className="card" key={i.id}>
              <img src={i.image} alt="" />
              <h1>{i.title}</h1>
              <p>{i.description}</p>
              <p>{i.price}</p>
              <Link to={`/product/${i.id}`}>
                <button>Go</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Proudcts;
