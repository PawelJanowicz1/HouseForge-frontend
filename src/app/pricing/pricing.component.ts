import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'; // Importuj moduł MatTable

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  // Definicja zmiennych
  displayedColumns: string[] = ['service', 'price'];

  pricingData = [
    { service: 'Montaż drzwi', price: '150 zł' },
    { service: 'Naprawa okien', price: '200 zł' },
    { service: 'Malowanie ścian', price: '300 zł' }
  ];
}
