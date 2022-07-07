import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shirts } from "../../type";
import { Car } from "../Car";
import { Header } from "../Header";
import { Aside, ImgS, ShopS } from "./styles";

export const Shop = () => {
  const [shirt, setShirt] = useState<Shirts[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:4000/produtos")
      .then((response) => response.json())
      .then((shirtsJson) => setShirt(shirtsJson));
  }, []);
  if (shirt === null) return null;
  return (
    <>
      <Header />
      <ShopS>
      <section>
        <Car />
      </section>
      <Aside>
        {shirt.map((item) => (
          <Link
            style={{ textDecoration: "none" }}
            key={item.id}
            to={`/shirt/${item.id}`}
          >
            <div>
              <h4>{item.name}</h4>
              <ImgS src={item.foto} />
              <span>{item.price}</span>
            </div>
          </Link>
        ))}
      </Aside>
    </ShopS>
    </>
  );
};
