import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Required/Login"

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
    </Routes>
  )
}
