import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/service/environmentservice';
import { EnvironmentDTO } from 'src/dto/environmentdto';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';

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

  constructor(service: EnvironmentService) {
    super(service);
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
}
