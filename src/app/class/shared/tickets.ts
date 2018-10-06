export class Tickets{
  id: number
  numero_ticket: string
  tipo_id: number
  user_id: number
  enterprise_id: number
  motivo_id: number
  description: string
  statu_id : number
  visto: boolean

  constructor(values: Object = {}){
    Object.assign(this, values)
  }
}