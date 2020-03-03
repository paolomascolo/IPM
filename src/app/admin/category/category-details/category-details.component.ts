import { Component, OnInit, Input } from '@angular/core';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { CategoryService } from 'src/service/category.service';
import { CategoryDTO } from 'src/dto/categorydto';

/**
 * Questa component si occupa di mostrare i dettagli di un utente (in questo caso aggiunge solo l'ID
 * alle informazioni già mostrate nella tabella generale). L'annotation "@Input()" prende il valore di dto
 * dalla UsersComponent ( usando il binding [dto]) e nel template ne mostra i dettagli. Questa component 
 * non viene chiamata mediante routing ma viene mostrata solo quando dto non è nullo (usando la direttiva
 * *ngIf ).
 * 
 * @author Vittorio Valent
 * 
 * @see CategoriesComponent
 */
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent extends AbstractCrudComponent<CategoryDTO> implements OnInit {

  /**
   * Qui prende in input il valore di dto
   */
  @Input() dto: CategoryDTO;

  constructor(service: CategoryService) {
    super(service);
  }

  ngOnInit() {
  }

}
