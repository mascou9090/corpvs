import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../Styles/styles";
import { Shirts } from "../../type";
import { Button, SectionS } from "./styles";

export const Shirt = () => {
  const [produtos, setProdutos] = useState<Shirts | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [bag, setBag] = useState<Shirts | null>();
  localStorage.setItem("bag", JSON.stringify(bag));

  const { id } = useParams();

  useEffect(() => {
    async function fetchProduto(url: string) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`http://localhost:4000/produtos/${id}`);
  }, [id]);

  const handleBuy = () => {
    setBag(produtos);
    window.alert("O item sera adicionado ao seu carrinho.");
  };

  if (loading)
    return (
      <>
        <Loading />
        <p>Carregando..</p>
      </>
    );
  if (error) return <p>{error}</p>;
  if (produtos === null) return null;

  return (
    <SectionS>
      <div>
        <h2>{produtos.name}</h2>
        <img src={produtos.foto} alt={produtos.name} />
        <span>{produtos.price}</span>
        <div>
          <Button onClick={handleBuy}>COMPRAR</Button>
        </div>
        <div>
          <p>{produtos.description}</p>
        </div>
      </div>
    </SectionS>
  );
};
