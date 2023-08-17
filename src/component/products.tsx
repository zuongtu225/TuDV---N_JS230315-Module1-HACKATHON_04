import React, { useEffect, useState } from "react";
import Chill from "./cart";

const Product = () => {
  const [data, setData] = useState<object[]>([]);
  const [id, setId] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <div className="container">
      {data.map((item: any) => (
        <div className="item" key={item.id}>
          <img src={item.thumbnail} alt="" />
          <p>{item.title}</p>
          <p>price: {item.price}$</p>
          <button onClick={() => setId(item.id)}>add to cart</button>
        </div>
      ))}
      <Chill idProp={id} />
    </div>
  );
};
export default Product;
