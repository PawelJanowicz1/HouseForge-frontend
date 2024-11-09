import { Component } from '@angular/core';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import {SendMessageFormComponent} from './contact/send-message-form.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatIcon} from '@angular/material/icon';
import {AboutComponent} from './about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SendMessageFormComponent, AboutComponent, NavbarComponent, MatIcon, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'HouseForge-frontend';

  isAboutPage(): boolean {
    return this.router.url === '/about';
  }

}
