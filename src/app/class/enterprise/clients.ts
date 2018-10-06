export class Clients {
  id: number;
  nombre: string;
  rut: number;
  direccion: string;
  telefono: number;
  correo: string;
  ceo: string;
  statu_id: number;
  tipo_profile_id: number;
  password: string
  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
