export interface User {
  email: string;
  password: string;
}

export interface Shirts {
  foto: string;
  description : string;
  name: string;
  id?: number;
  price?: number;
}
export interface SettingProps {
  data: string[];
}