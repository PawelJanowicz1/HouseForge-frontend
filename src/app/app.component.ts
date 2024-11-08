import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SendMessageFormComponent} from './send-message-form/send-message-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SendMessageFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HouseForge-frontend';
}
