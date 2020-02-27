import { Component, OnInit } from '@angular/core';
import { PacketComponent } from './packet/packet.component';
import { PacketService } from 'src/service/packet.service';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { PacketDTO } from 'src/dto/packetdto';
import { OstypeDTO } from 'src/dto/ostypedto';
import { OstypeService } from 'src/service/ostypeservice';


@Component({
  selector: 'app-all-packet',
  templateUrl: './all-packet.component.html',
  styleUrls: ['./all-packet.component.css']
})
export class AllPacketComponent extends AbstractCrudComponent<PacketDTO> implements OnInit {

  packets: PacketDTO[];
  ostypes: OstypeDTO[];

  selectedPacket: PacketDTO;

  constructor(packetService: PacketService, ostypeService: OstypeService) {
    super(packetService);
    
    ostypeService.getAll().subscribe(ost => this.ostypes = ost);
   }

  ngOnInit() {
    this.clear();
    this.getAll();
  }

  clear() {
    this.dto = new PacketDTO;
  }

  onSelect(packet: PacketDTO) {
    this.selectedPacket = packet;
  }
}
