export class Profile {
  nombre: string;
  rut: string;
  correo: string;
  direccion: string;
  telefono: number;
  password: string;
  profile_id: number;
  changePassword: boolean;
  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
