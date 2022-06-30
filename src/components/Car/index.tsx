import { useState } from "react";
import { Card } from "./styles";

export const Car = () => {

  const [myBag, setMyBag] = useState<string | null>(null);
  
  //let data = localStorage.getItem(JSON.parse('bag'))
  //console.log(data)
  //setMyBag(data) 
  console.log(myBag)
  return (
    <Card>
      <strong>Carrinho de compra</strong>
      <div>
        <span>Produtos : </span>
        <p>. Valor</p>
      </div>
    </Card>
  );
};
