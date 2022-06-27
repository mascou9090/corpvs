import { Route, Routes } from "react-router-dom"
import { Blusas } from "../components/Blusas"
import { Finish } from "../components/Finish"
import { Login } from "../components/Login"
import { OBS } from "../components/OBS"
import { User } from "../components/User"

export const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/user" element={<User />} />
      <Route path="/blusas" element={<Blusas />} />
      <Route path="/obs" element={<OBS />} />
      <Route path="/finish" element={<Finish />} />
    </Routes>
  )
}
