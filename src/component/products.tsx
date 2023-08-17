import React, { useState } from "react";
import "../index.css";

interface IProps {
  setCall: (call: boolean) => void;
}

function Products(props: IProps) {
  const { setCall } = props;
  interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
    orderQty: number;
  }
  const listProduct = [
    {
      id: 1,
      name: "Mivina Mushroom",
      price: 10000,
      img: "https://i2.wp.com/fb.ru/misc/i/gallery/12424/2138674.jpg",
    },
    {
      id: 2,
      name: "Mivina Chicken",
      price: 12200,
      img: "https://i0.wp.com/fb.ru/misc/i/gallery/13662/1382429.jpg",
    },
    {
      id: 3,
      name: "Mivina CNPY",
      price: 12700,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGX3NXVaT_yCfIUFNHeLPe-YdVJHBUSwhAA&usqp=CAU",
    },
    {
      id: 4,
      name: "Mivina Beef",
      price: 23000,
      img: "https://cafefcdn.com/203337114487263232/2021/8/31/201704281493463646sncpsg10obj01jpgoejpgpfjpg1350nowmjpg1350x-16303773789031559283900.jpg",
    },
    {
      id: 5,
      name: "Mivina Shrimp",
      price: 27000,
      img: "https://www.theatre20.com/wp-content/uploads/2019/10/1cc8948204359ae6f0ede2ed2eec4cb5.jpeg",
    },
    {
      id: 6,
      name: "Mivina Shrimp  ",
      price: 27000,
      img: "https://www.theatre20.com/wp-content/uploads/2019/10/1cc8948204359ae6f0ede2ed2eec4cb5.jpeg",
    },
    {
      id: 7,
      name: "Mivina Shrimp  ",
      price: 27000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGX3NXVaT_yCfIUFNHeLPe-YdVJHBUSwhAA&usqp=CAU",
    },
    {
      id: 8,
      name: "Mivina Shrimp  ",
      price: 27000,
      img: "https://www.theatre20.com/wp-content/uploads/2019/10/1cc8948204359ae6f0ede2ed2eec4cb5.jpeg",
    },
    {
      id: 9,
      name: "Mivina Shrimp  ",
      price: 27000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGX3NXVaT_yCfIUFNHeLPe-YdVJHBUSwhAA&usqp=CAU",
    },
    {
      id: 10,
      name: "Mivina Shrimp  ",
      price: 27000,
      img: "https://www.theatre20.com/wp-content/uploads/2019/10/1cc8948204359ae6f0ede2ed2eec4cb5.jpeg",
    },
  ];
  //products
  localStorage.setItem("Noodles", JSON.stringify(listProduct));
  const list = localStorage.getItem("Noodles");
  const listNoodlles: Product[] = list ? JSON.parse(list) : [];
  //cart
  const listCarts = localStorage.getItem("ListCart");
  const listCartLocal: Product[] = listCarts ? JSON.parse(listCarts) : [];

  const [listCart, setListCart] = useState<Product[]>(listCartLocal);
  console.log("list Cart Product", listCart);
  localStorage.setItem("ListCart", JSON.stringify(listCart));

  const addCart = (id: number) => {
    const product = listNoodlles.find((item) => item.id === id);
    if (product) {
      const productInCart = listCart.find((item) => id === item.id);

      if (productInCart) {
        productInCart.orderQty += 1;
        setListCart([...listCart]);
        localStorage.setItem("ListCart", JSON.stringify(listCart));
      } else {
        const addedCart: Product = {
          ...product,
          orderQty: 1, // Specify orderQty here
        };
        setListCart([...listCart, addedCart]);
        localStorage.setItem("ListCart", JSON.stringify(listCart));
      }
    }
    setCall(true);
  };
  return (
    <>
      <div className="top-left">
        <h1 className="title">MỲ GÓI MIVINA UKRAINA </h1>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEUAW7v/1QAAVb+jn3j/2QBoOoZYAAAAzUlEQVR4nO3QsQGAMAzAsBT4/2b2eO0onaAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACASx62ednmY5vD5qSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpH7zk2pa0LCuDAAAAABJRU5ErkJggg=="
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png"
          alt=""
        />
      </div>
      <div className="products">
        {listNoodlles.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={`${item.img}`} alt="" />
              <p>{item.name}</p>
              <p>{item.price.toLocaleString()} vnđ</p>
              <button onClick={() => addCart(item.id)}>ADD TO CART</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Products;
