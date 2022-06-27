import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../type/User';
import { KeyS, UserS } from '../Login/styles';
import { RegisterS } from './styles'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().min(2, 'Esse campo deve ter pelo menos 2 digitos').required('O nome é obrigatorio'),
  email: yup.string().email('Digite um email valido').min(6, 'Esse campo deve ter pelo menos 6 digitos').required("O email é obrigatorio"),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required("A senha obrigatoria"),
  confirmPassword: yup.string().required("Confirmar a senha é correspondente").oneOf([yup.ref("password")], "As senhas devem ser iguais")
}).required();


export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<User> = (data) => console.log(data)

  const handleRegister = () => {
    
  }
  return (
    <div>
      <RegisterS>
      <form >
        <h2>Regitrar</h2>
        <div style={{ display: "flex" }}>
          <UserS size={24} />
          <input type="text" {...register("name", {required: true, minLength:2})}  placeholder="Digite seu nome" />
        </div>
          <span>{errors.name?.message}</span>
        <div style={{ display: "flex" }}>
          <UserS size={24} />
          <input type="text" {...register("email", {required: true, minLength:2})}  placeholder="Digite seu email" />
        </div>
        <span>{errors.email?.message}</span>
        <div style={{ display: "flex" }}>
          <KeyS size={24} />
          <input type="password" {...register("password")} placeholder="Digite sua senha" />
        </div>
        <span>{errors.password?.message}</span>
        <div style={{ display: "flex" }}>
          <KeyS size={24} />
          <input type="password" {...register("confirmPassword")} placeholder="Comfirmar sua senha" />
        </div>
        <span>{errors.confirmPassword?.message}</span>
        <div>
          <button onClick={handleSubmit(onSubmit)}>Logar</button>
          <button onClick={handleRegister}>Registrar</button>
        </div>
      </form>
      </RegisterS>
    </div>
  )
}
