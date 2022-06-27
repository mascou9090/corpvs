import React, { useState } from "react";
import { LoginS, UserS, KeyS } from './styles';
import * as yup from "yup";

let schema = yup.object().shape({
  name: yup
      .string()
      .required("Nome Obrigatório (a)")
      .min(4, "Deve ter no mínimo 3 caracteres"),
  password: yup
      .string()
      .required("Senha Obrigatório (a)")
      .min(6, "Deve ter no mínimo 6 caracteres"),
});

export const Login = () => {
  //const [] = useState<>(null);

  return (
    <LoginS>
      <form>
        <UserS size={24} />
        <label>Email</label>
        <input type="text" placeholder="Digite seu email" />
        <KeyS size={24} />
        <label>Senha</label>
        <input type="passward" placeholder="Digite sua senha" />
        <button>Enviar</button>
      </form>
    </ LoginS>
  );
};
