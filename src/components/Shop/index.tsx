import {useEffect, useState} from 'react'
import { Shirts } from '../../type';

export const Shop = () => {
  const [shirt, setShirt] = useState<[Shirts]>();
  useEffect(() => {
    fetch('http://localhost:4000/produtos')
    .then(response => response.json())
    .then(shirtsJson => setShirt(shirtsJson))
  },[]);

  return (
    <div>
    </div>
  )
}
