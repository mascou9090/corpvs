import { useEffect, useState } from "react";
import { Shirts } from "../../../type";
import { Aside, ImgS, Main, ShopS } from "./styles";

export const Shop = () => {
  const [shirt, setShirt] = useState<Shirts[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:4000/produtos")
      .then((response) => response.json())
      .then((shirtsJson) => setShirt(shirtsJson));
  }, []);
  if (shirt === null) return null;
  return (
    <ShopS>
      <Main>Main</Main>
      <Aside>
        {shirt.map((item) => (
          <div>
            <h4>{item.name}</h4>
            <ImgS src={item.foto} />
            <span>{item.price}</span>
          </div>
        ))}
      </Aside>
    </ShopS>
  );
};
