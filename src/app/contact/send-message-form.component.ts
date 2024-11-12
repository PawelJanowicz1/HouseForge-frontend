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
  title: string = 'Skontaktuj się z nami i ustalmy szczegóły';
  isSubmitting = false;

  constructor(private http: HttpClient) {
    this.messageForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:\+48\s?\d{3}\s?\d{3}\s?\d{3}|\+48\d{9}|\d{9}|\d{3}\s?\d{3}\s?\d{3})$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    if (this.messageForm.valid) {
      this.isSubmitting = true;
      const formData = this.messageForm.value;

      this.http.post('http://localhost:8086/send-message', formData)
        .subscribe(response => {
          console.log('Message sent', response);
          this.isSubmitting = false;
        }, error => {
          console.error('Error sending message', error);
          this.isSubmitting = false;
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
