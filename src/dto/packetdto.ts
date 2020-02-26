export class PacketDTO {

   id: number;

   name: string;

   description: string;

   getSearchString() : string{
      return this.id.toString()+this.name+this.description;
   }
}

