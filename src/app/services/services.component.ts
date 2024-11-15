import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {CommonModule, NgClass} from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    NgClass
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ourServices: string = 'Co oferujemy?';
  servicesList: any[] = [
    {
      title: 'Budowa domów na zamówienie',
      description: 'Kompleksowa budowa domów jednorodzinnych, realizacja projektów indywidualnych oraz gotowych.',
      image: '/images/photo-gallery-3.jpg',
      direction: 'left'
    },
    {
      title: 'Projektowanie i doradztwo',
      description: 'Usługi architektoniczne i projektowe, optymalizacja przestrzeni i zgodność z wymaganiami technicznymi.',
      image: '/images/photo-gallery-1.jpg',
      direction: 'right'
    },
    {
      title: 'Budowa domów energooszczędnych i pasywnych',
      description: 'Budowa domów charakteryzujących się niskim zużyciem energii, w tym pompy ciepła, panele słoneczne.',
      image: '/images/photo-gallery-5.jpg',
      direction: 'left'
    }]
}
