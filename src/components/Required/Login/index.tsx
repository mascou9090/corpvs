import { LoginS, UserS, KeyS, Button } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../../type";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const schema = yup.object({
  email: yup.string()
  .email('Digite um email valido')
  .min(6, 'Esse campo deve ter pelo menos 6 digitos')
  .required("O email é obrigatorio"),
  password: yup.string()
  .min(6, 'A senha deve ter pelo menos 6 digitos')
  .required("A senha obrigatoria"),
}).required();


export const Login = () => {
  const [load, setLoad] = useState<User | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<User> = (data) => {
    setLoad(data)
    const dadosString = JSON.stringify(data)
    localStorage.setItem('dadosString', dadosString)
  }
  useEffect(() => {
    window.onload
  },[load, localStorage])

  return (
    <LoginS>
      <form>
        <h2>Login</h2>
        <div>
          <UserS size={24} />
          <input
            type="text"
            {...register("email", { required: true, minLength: 2 })}
            placeholder="Digite seu email"
          />
        </div>
        <span>{errors.email?.message}</span>
        <div>
          <KeyS size={24} />
          <input
            type="password"
            {...register("password")}
            placeholder="Digite sua senha"
          />
        </div>
        <span>{errors.password?.message}</span>
        <div>
          <Button to="/shop" onClick={handleSubmit(onSubmit)}>Enviar</Button>
        </div>
      </form>
    </LoginS>
  );
};
