export class Profile {
  nombre: string;
  rut: string;
  correo: string;
  direccion: string;
  telefono: number;
  password: string;
  profile_id: number;
  ceo: string;
  telefono_ceo: number;
  rut_ceo: number;
  correo_ceo: string;
  changePassword: boolean;
  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
