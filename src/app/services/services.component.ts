import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ourServices: string = 'Oferujemy:';
  servicesList: string = `
    <ul class="services-list">
      <li><strong>Budowa domów na zamówienie</strong></li>
      <li><strong>Projektowanie i doradztwo</strong></li>
      <li><strong>Budowa domów energooszczędnych i pasywnych</strong></li>
      <li><strong>Prace ziemne i fundamentowe</strong></li>
      <li><strong>Instalacje sanitarne, elektryczne i grzewcze</strong></li>
      <li><strong>Wykończenia wnętrz</strong></li>
      <li><strong>Remonty i modernizacje</strong></li>
      <li><strong>Nadzór budowlany i doradztwo prawne</strong></li>
      <li><strong>Budynek pod klucz</strong></li>
      <li><strong>Ekologiczne rozwiązania budowlane</strong></li>
    </ul>
  `;
}
