export class Publicity {
  id: number;
  name: string;
  image: string;
  type: number;
  type_register: number;
  statu: boolean;
  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
