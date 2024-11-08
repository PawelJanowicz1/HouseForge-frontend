import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-send-message-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './send-message-form.component.html',
})
export class SendMessageFormComponent {
  messageForm: FormGroup;
  title: string = 'Send Message';

  constructor(private http: HttpClient) {
    this.messageForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const formData = this.messageForm.value;
      this.http.post('http://localhost:8086/send-message', formData)
        .subscribe(response => {
          console.log('Message sent', response);
        }, error => {
          console.error('Error sending message', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
