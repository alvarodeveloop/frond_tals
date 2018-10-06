export class Subscription{

  id: number
  titulo: string
  descripcion: string
  periodo: number
  precio: number
  activo: boolean

  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}