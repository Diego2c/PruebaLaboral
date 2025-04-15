import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environments } from '../../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  createPrestamo = 'createPrestamo';
  getPrestamo = 'prestamos';
  postUls = 'post';

  constructor( private http :HttpClient) { }

  getAllPrestamos(){
    return lastValueFrom(
      this.http.get(environments.service + this.getPrestamo)
    );
  }

  postPrestamo(){
    return lastValueFrom(
      this.http.get(environments.service + this.createPrestamo)
    );
  }

  getPosts(){
    return lastValueFrom(
      this.http.get(environments.post + this.postUls)
    );
  }

}
