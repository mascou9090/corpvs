import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../Styles/styles";
import { Shirts } from "../../type";
import { SectionS } from "./styles";

export const Shirt = () => {
  const [produto, setProduto] = useState<Shirts | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [bag, setBag] = useState<Shirts | null>(null);
  
  localStorage.setItem('bag', JSON.stringify(bag))

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    async function fetchProduto(url: string) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`http://localhost:4000/produtos/${id}`);
  }, [id]);

  const handleBuy = () => {
    setBag(produto)
  }


  if (loading)
    return (
      <>
        <Loading />
        <p>Carregando..</p>
      </>
    );
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <SectionS>
      <div>
        <h2>{produto.name}</h2>
        <img src={produto.foto} alt={produto.name} />
        <span>{produto.price}</span>
        <div>
          <button onClick={handleBuy}>COMPRAR</button>
        </div>
        <div>
          <p>{produto.description}</p>
        </div>
      </div>
    </SectionS>
  );
};
