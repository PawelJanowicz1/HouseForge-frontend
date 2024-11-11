import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { SendMessageFormComponent } from './contact/send-message-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIcon } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SendMessageFormComponent, AboutComponent, NavbarComponent, MatIcon, RouterModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeaderAndFooter = true;
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.showHeaderAndFooter = !['/about', '/services', '/contact'].includes(event.url);
      }
    if( this.currentRoute === '/about'){
      document.body.style.backgroundImage = 'url("/images/white-paper3.jpg")';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
    } else if( this.currentRoute === '/services'){
      document.body.style.backgroundColor = '#d0e7f9';
    } else if( this.currentRoute === 'contact'){
      document.body.style.backgroundColor = '#ffffff';
    }});
  }
}
