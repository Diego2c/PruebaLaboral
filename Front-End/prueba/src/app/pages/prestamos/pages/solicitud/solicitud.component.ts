import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrestamoService } from '../../services/prestamo/prestamo.service';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.scss'
})
export class SolicitudComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,private prestamoService : PrestamoService) {
    this.form = this.fb.group({
      dpi: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', Validators.required],
      monto: [null, [Validators.required, Validators.min(1)]],
      cuotas: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const nuevaSolicitud = {
        ...this.form.value,
        fecha_registro: new Date().toISOString(),
      };
      console.log('Enviando solicitud:', nuevaSolicitud);

      this.prestamoService
      .postPrestamo(nuevaSolicitud)
      .then((response: any) => {
        console.log(response);

      })
      .catch((error) => {
       // this.wmsService.showInfoError(error.message,error.message,true);
     });

    } else {
      this.form.markAllAsTouched();
    }
  }
}
