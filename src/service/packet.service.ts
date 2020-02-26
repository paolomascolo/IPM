import { Injectable } from '@angular/core';
import { PacketDTO } from 'src/dto/packetdto';
import { AbstractService } from './abstractservice';
import { HttpClient } from '@angular/common/http';
import { PacketComponent } from 'src/app/admin/all-packet/packet/packet.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacketService extends AbstractService<PacketDTO>{

  packets: PacketDTO[];

  constructor(http: HttpClient) {
    super(http);
    this.type='packet';
   }
}
