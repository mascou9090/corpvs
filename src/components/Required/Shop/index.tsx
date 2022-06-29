import {useEffect, useState} from 'react'
import { Shirts } from '../../../type';
import { Aside, Main, ShopS } from './styles';

export const Shop = () => {
  const [shirt, setShirt] = useState<Shirts[] | null>(null);
  useEffect(() => {
    fetch('http://localhost:4000/produtos')
    .then(response => response.json())
    .then(shirtsJson => setShirt(shirtsJson))
  },[]);

  return (
    <ShopS>
      <Main>
        Main
      </Main>
      <Aside>
        Produtos
      </Aside>
    </ShopS>
  )
}
