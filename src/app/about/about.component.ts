  import {Component} from '@angular/core';

  @Component({
    selector: 'app-about',
    standalone: true,
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
  })
  export class AboutComponent {
    description: string = 'House Forge to firma budowlana, która specjalizuje się w budowie domów w Trójmieście.';
    contactDetails: string = 'Skontaktuj się z nami, aby omówić szczegóły budowy Twojego domu.';
  }
