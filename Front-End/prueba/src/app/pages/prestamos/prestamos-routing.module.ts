import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';

const routes: Routes = [
    {
      path : 'home', component : HomeComponent
    },
    {
      path : 'solicitud', component : SolicitudComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
