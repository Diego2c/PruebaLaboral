import { Component, Input } from '@angular/core';
import { Prestamo } from '../../../interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() dataList: Prestamo[] = [];
  @Input() posts: any[] = [];
}
