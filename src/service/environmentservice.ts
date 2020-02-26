import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { EnvironmentDTO } from 'src/dto/environmentdto';
import { HttpClient } from '@angular/common/http';
/* import { LoginDTO } from 'src/dto/logindto'; */
import { Observable } from 'rxjs';

/**
 * I service sono decorati da @Injectable. 
 * 
 * @author Vittorio Valent
 * 
 * @see AbstractService
 */
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService extends AbstractService<EnvironmentDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'environment';
  }

  /* login(loginDTO: LoginDTO): Observable<UserDTO> {
    return this.http.post<any>('http://localhost:8080/' + this.type + '/login', loginDTO)
  } */

}
