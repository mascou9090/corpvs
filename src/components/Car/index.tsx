import { useEffect, useState } from "react";
import { Shirts } from "../../type";
import { Card, Delete } from "./styles";

export const Car = () => {
  const [myBag, setMyBag] = useState<Shirts | null>(null);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    let data: any = localStorage.getItem("bag");
    let dataString = JSON.parse(data);
    setMyBag(dataString);
  }, [cart]);

  const handleClick = (e: any) => {
    e.preventDefault();
    setCart(cart - 1);
    if (cart <= 0) localStorage.removeItem("bag");
    window.alert("o item sera removido do carrinho")
  };

  return (
    <Card>
      <strong>Carrinho de compra</strong>
        <div>
        <p>
        <span>{myBag?.name}</span> R$ :{myBag?.price}
        </p>
        <Delete size={22} onClick={handleClick} />
      </div>
    </Card>
  );
};
