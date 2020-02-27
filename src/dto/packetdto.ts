import { OstypeDTO } from './ostypedto';

export class PacketDTO {

   id: number;

   name: string;

   description: string;

   ostype: OstypeDTO;

   getSearchString() : string{
      return this.id.toString()+this.name+this.description;
   }
}

