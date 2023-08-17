import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  // Thêm các thuộc tính khác của sản phẩm tại đây
}
interface IdProp {
  idProp: number | null;
}

function Chill(idProp: IdProp) {
  // không cần định nghĩa kiểu dữ liệu của props khi use React.FC
  // TypeScript sẽ tự động hiểu kiểu dữ liệu của props
  console.log("=>", idProp.idProp);

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    if (idProp !== null) {
      fetch(`https://dummyjson.com/products/${idProp}`)
        .then((response) => response.json())
        .then((item: Product) => {
          // mỗi lần click
          setData((prevData) => [...prevData, item]);
        });
    }
  }, [idProp]);
  console.log("!", data);

  return <div>Chill</div>;
}

export default Chill;
