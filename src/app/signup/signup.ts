import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
})
export class Signup {
  name = '';
  email = '';
  password = '';

  onSignup() {
    console.log('Signup Data:', this.name, this.email, this.password);
  }
}