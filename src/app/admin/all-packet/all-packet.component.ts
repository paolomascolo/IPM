import { Component, OnInit } from '@angular/core';
import { PacketComponent } from './packet/packet.component';
import { PacketService } from 'src/service/packet.service';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { PacketDTO } from 'src/dto/packetdto';


@Component({
  selector: 'app-all-packet',
  templateUrl: './all-packet.component.html',
  styleUrls: ['./all-packet.component.css']
})
export class AllPacketComponent extends AbstractCrudComponent<PacketDTO> implements OnInit {

  packets: PacketDTO[];

  selectedPacket: PacketDTO;

  constructor(packetService: PacketService) {
    super(packetService);
    packetService.getAll().subscribe(pac => this.packets = pac );
   }

  ngOnInit() {
    this.clear();
    this.getAllPackets();
  }

  clear() {
    this.dto = new PacketDTO;
  }

  getAllPackets() {
    return this.packets;
  }

  onSelect(packet: PacketDTO) {
    this.selectedPacket = packet;
  }
}
