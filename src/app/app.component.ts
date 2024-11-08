import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
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
  title = 'HouseForge-frontend';
}
