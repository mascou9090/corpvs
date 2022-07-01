import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Shirts } from "../../type";
import { Card, Delete, Exit } from "./styles";

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
    if (cart <= 0) localStorage.removeItem('bag');
  };

  const NAVIGATION = useNavigate();


  const handleExit = () => {
    NAVIGATION('/')
  }

  if (myBag === null) return (
    <Card>
      <strong>Carrinho de compra</strong>
      <Exit onClick={handleExit}>Sair</Exit>
    </Card>
  );
  return (
    <Card>
      <strong>Carrinho de compra</strong>
      <Exit onClick={handleExit}>Sair</Exit>
      <div>
        <p>
          <span>{myBag?.name}</span> R$ :{myBag?.price}
        </p>
        <Delete size={22} onClick={handleClick} />
      </div>
    </Card>
  );
};
