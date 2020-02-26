import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { OstypeDTO } from 'src/dto/ostypedto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OstypeService extends AbstractService<OstypeDTO>{

  constructor (http: HttpClient){
    super(http);
    this.type='ostype';
  }

}
