import { Component, OnInit, Input } from '@angular/core';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { PacketDTO } from 'src/dto/packetdto';
import { PacketService } from 'src/service/packet.service';

@Component({
  selector: 'app-packet-detail',
  templateUrl: './packet-detail.component.html',
  styleUrls: ['./packet-detail.component.css']
})
export class PacketDetailComponent extends AbstractCrudComponent<PacketDTO> implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() ostype: string;
  @Input() packet: PacketDTO;

  constructor(private packetService: PacketService) { 
    super(packetService);
  }

  ngOnInit() {
  }

  update(packet: PacketDTO) {
    this.packetService.update(packet).subscribe(() => this.getAll());
  }

  delete(packetId: number) {
    this.packetService.delete(packetId);
  }

  updateOnEnter(event, packet: PacketDTO) {
    if ( event.keyCode == 13 ) {
      this.update( packet );
    }
  }

}
