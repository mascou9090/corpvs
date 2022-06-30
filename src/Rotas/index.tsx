import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Required/Login"
import { Shop } from "../components/Required/Shop"

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/shop" element={<Shop />}/>
    </Routes>
  )
}
