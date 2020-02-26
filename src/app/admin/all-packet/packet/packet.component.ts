import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packet',
  templateUrl: './packet.component.html',
  styleUrls: ['./packet.component.css']
})
export class PacketComponent implements OnInit {
  @Input() name;
  @Input() description;

  // @Input() selectedPacket: boolean;

  constructor() { }

  ngOnInit() {
  }

/*  onSelect() {
    this.selectedPacket = !this.selectedPacket;
  }

  clearSelect() {
    this.selectedPacket = false;
  }
*/

}
