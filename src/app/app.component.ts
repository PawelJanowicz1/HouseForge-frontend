import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SendMessageFormComponent} from './contact/send-message-form.component';
import {PricingComponent} from './pricing/pricing.component';
import {NavbarComponent} from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SendMessageFormComponent, PricingComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HouseForge-frontend';
}
