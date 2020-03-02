import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/service/environmentservice';
import { PacketService } from 'src/service/packet.service';
import { EnvironmentDTO } from 'src/dto/environmentdto';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { PacketDTO } from 'src/dto/packetdto';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Come ogni componente di CRUD, questa estende la classe AbstractCrudComponent, ereditando tutti i metodi 
 * per le CRUD. Questo ci permette di non riscrivere ogni volta gli stessi metodi e avere meno errori.
 * 
 * @author Vittorio Valent
 * 
 * @see AbstractCrudComponent
 * 
 */
@Component({
  selector: 'app-environments',
  templateUrl: './environment-list.component.html',
  styleUrls: ['./environment-list.component.css']
})

export class EnvironmentListsComponent extends AbstractCrudComponent<EnvironmentDTO> implements OnInit {
  packets: PacketDTO[];
  servicep: PacketService;
  fileUrl;


  constructor(service: EnvironmentService, servicep: PacketService, private sanitizer: DomSanitizer) {
    super(service);
    servicep.getAll().subscribe(packet => this.packets = packet);
  }

  ngOnInit() {
    this.clear();
    this.getAll();
  }

  clear() {
    this.dto = new EnvironmentDTO();
  }

  close() {
    this.selected = null;
  }

  downloadThis(downloadDto: EnvironmentDTO) {
    const data = '#!/bin/sh\nsudo ' + downloadDto.environmentpacket.ostype.command + ' ' + downloadDto.environmentpacket.name;
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  } 
}
