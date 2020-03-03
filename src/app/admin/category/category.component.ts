import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/service/category.service';
import { CategoryDTO } from 'src/dto/categorydto';
import { AbstractCrudComponent } from 'src/app/utils/abstractcomponent';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends AbstractCrudComponent<CategoryDTO> implements OnInit {

  constructor(service: CategoryService, filter : SearchService) 
  {
    super(service);
  }

  ngOnInit() 
  {
    this.clear();
    this.getAll();
  }

  clear() {
    this.dto = new CategoryDTO();
  }

  close() {
    this.selected = null;
  }
}
