export class AdminEnterprise {
  id: number;
  nombre: string;
  rut: number;
  direccion: string;
  giro: string;
  telefono: number;
  correo: string;
  ceo: string;
  telefono_ceo: number;
  rut_ceo: number;
  correo_ceo: string;
  statu_id: number;
  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
