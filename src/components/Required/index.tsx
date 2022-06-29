import { 
  useState, 
  useEffect 
} from 'react';
import { User } from '../../type';
import { Login } from './Login'
import { Shop } from './Shop'


const user:any = localStorage.getItem('dadosString')
let localUser = JSON.parse(user);

export const Required = () => {
  const [pass, setPass] = useState<User>();
  useEffect(() => {
    setPass(localUser)
  },[pass])
  

  return (
    <div>
      {!pass ? <Login /> : <Shop />} 
    </div>
  )
}
