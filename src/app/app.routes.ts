import { Routes } from '@angular/router';
import * as path from 'node:path';
import {AboutComponent} from './about/about.component';
import {SendMessageFormComponent} from './contact/send-message-form.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ServicesComponent} from './services/services.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: SendMessageFormComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'services', component: ServicesComponent }
];
