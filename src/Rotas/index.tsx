import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"
import { Shirt } from "../components/Shirt"
import { Shop } from "../components/Shop"

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="shirt/:id" element={<Shirt />}/>
    </Routes>
  )
}
