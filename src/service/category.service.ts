import { Inject, Injectable } from "@angular/core";
import { AbstractService } from './abstractservice';
import { CategoryDTO } from 'src/dto/categorydto';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class CategoryService extends AbstractService<CategoryDTO>{

    categories: CategoryDTO[];
  
    constructor(http: HttpClient){
      super(http);
      this.type='category';
    }
  }