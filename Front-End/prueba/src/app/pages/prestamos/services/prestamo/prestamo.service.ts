import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environments } from '../../../../../environments/environments';
import { Prestamo } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  createPrestamo = 'createPrestamo';
  getPrestamo = 'prestamos';
  postUls = 'posts';

  constructor( private http :HttpClient) { }

  getAllPrestamos(){
    return lastValueFrom(
      this.http.get(environments.service + this.getPrestamo)
    );
  }

  postPrestamo(nuevaSolicitud : Prestamo){
    return lastValueFrom(
      this.http.post(environments.service + this.createPrestamo,nuevaSolicitud)
    );
  }

  getPosts(){
    return lastValueFrom(
      this.http.get(environments.post + this.postUls)
    );
  }

}
