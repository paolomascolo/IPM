import { Component, OnInit } from '@angular/core';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { OstypeService } from 'src/service/ostypeservice';
import { OstypeDTO } from 'src/dto/ostypedto';

@Component({
  selector: 'app-ostype',
  templateUrl: './ostype.component.html',
  styleUrls: ['./ostype.component.css']
})
export class OstypeComponent extends AbstractCrudComponent <OstypeDTO> implements OnInit{

  constructor(service: OstypeService) {
    super(service);
   }

  ngOnInit() {
    this.clear();
    this.getAll();
  }

  clear(){
    this.dto = new OstypeDTO();
  }

  close(){
    this.selected = null;
  }

}
