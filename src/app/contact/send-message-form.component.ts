import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-send-message-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.css']
})
export class SendMessageFormComponent {
  messageForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  contactUs: string = 'Skontaktuj się z nami i omówimy szczegóły';

  constructor(private http: HttpClient) {
    this.messageForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.pattern(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/)  // Dodano \s, żeby pozwolić na spacje
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:\+48\s?\d{3}\s?\d{3}\s?\d{3}|\+48\d{9}|\d{9}|\d{3}\s?\d{3}\s?\d{3})$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(25)
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
        Validators.pattern(/^[\w\s.,;:'"-]+$/)
      ]),
    });
  }

  onSubmit() {
    if (this.messageForm.valid) {
      this.isSubmitting = true;
      const formData = this.messageForm.value;
      this.http.post('https://budowa-domow-trojmiasto.pl/api/send-message', formData)
        .subscribe(response => {
          this.isSubmitting = false;
          this.isSubmitted = true;
          console.log(response);
        }, error => {
          this.isSubmitting = false;
          console.error('Error sending message', error);
        });
    }
  }

  get name() {
    return this.messageForm.get('name');
  }

  get phoneNumber() {
    return this.messageForm.get('phoneNumber');
  }

  get email() {
    return this.messageForm.get('email');
  }

  get message() {
    return this.messageForm.get('message');
  }
}
