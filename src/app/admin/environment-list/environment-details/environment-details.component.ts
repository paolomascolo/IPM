import { Component, OnInit, Input } from '@angular/core';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { EnvironmentService } from 'src/service/environmentservice';
import { EnvironmentDTO } from 'src/dto/environmentdto';
import { PacketService } from 'src/service/packet.service';
import { PacketDTO } from 'src/dto/packetdto';

@Component({
  selector: 'app-environment-details',
  templateUrl: './environment-details.component.html',
  styleUrls: ['./environment-details.component.css']
})
export class EnvironmentDetailsComponent extends AbstractCrudComponent<EnvironmentDTO> implements OnInit {
  packets: PacketDTO[];
  servicep: PacketService;

  /**
   * Qui prende in input il valore di dto
   */
  @Input() dto: EnvironmentDTO;

  constructor(service: EnvironmentService, servicep: PacketService) {
    super(service);
    servicep.getAll().subscribe(packet => this.packets = packet);

  }

  ngOnInit() {
  }

}

