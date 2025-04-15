import { Component } from '@angular/core';
import { SolicitudComponent } from '../solicitud/solicitud.component'; // ajusta el path si es necesario
import { PrestamoService } from '../../services/prestamo/prestamo.service';
import { Post, Prestamo } from '../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SolicitudComponent,CommonModule , CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  dataList: Prestamo[] = [];
  posts: Post[] = [];

  constructor(private prestamoService : PrestamoService){

  }

  ngOnInit() {
    this.getItems();
    this.loadPosts();
  }

  getItems() {
    this.prestamoService.getAllPrestamos()
      .then((response: any) => {
        this.dataList = response
        console.log(this.dataList);
      })
      .catch((error) => {
        //this.wmsService.showInfoError(error.message,error.message,true);
     });
  }

  loadPosts(): void {
    this.prestamoService.getPosts()
      .then((response: any) => {
        this.posts = response;
        console.log( this.posts);
      },
      (error) => {
        console.error('Error fetching posts', error);
      }
    );
  }

}
