import React, { useEffect, useState } from "react";
import { BiSolidCartAlt } from "react-icons/bi";
import "../index.css";
export default function Rendercart() {
  interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
    orderQty: number;
  }

  const listCarts = localStorage.getItem("ListCart");
  const listCartLocal: Product[] = listCarts ? JSON.parse(listCarts) : [];
  const [listCart, setListCart] = useState<Product[]>([]);
  useEffect(() => {
    setListCart(listCartLocal);
  }, [listCartLocal]);

  const minus = (id: number) => {
    const updatedListCart = listCart.map((product) => {
      if (product.id === id && product.orderQty > 1) {
        return { ...product, orderQty: product.orderQty - 1 };
      }
      return product;
    });
    setListCart(updatedListCart);
    localStorage.setItem("ListCart", JSON.stringify(updatedListCart));
  };
  const plus = (id: number) => {
    const updatedListCart = listCart.map((product) => {
      if (product.id === id) {
        return { ...product, orderQty: product.orderQty + 1 };
      }
      return product;
    });

    setListCart(updatedListCart);
    localStorage.setItem("ListCart", JSON.stringify(updatedListCart));
  };
  return (
    <div className="render">
      <div className="title-top">
        <p>Giỏ hàng của bạn </p>
        <BiSolidCartAlt className="cartIcon" />
      </div>

      <div className="listOrder">
        {listCartLocal.map((item) => {
          return (
            <div className="order" key={item.id}>
              <img src={`${item.img}`} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <div className="changeQuanity">
                <button id="minus" onClick={() => minus(item.id)}>
                  -
                </button>
                <p className="quanty">{item.orderQty}</p>
                <button id="plus" onClick={() => plus(item.id)}>
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
