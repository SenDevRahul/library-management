import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';
import { User } from '../models/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.html',
})
export class Login {
  email = '';
  password = '';

   errorMassage='';

   constructor(private userService:UserService, private router: Router){}
  onLogin() {
    console.log('Login Data:', this.email, this.password);
     const user :User = {
    userId: this.email, 
    firstName:'',
    lastName:'',
    password: this.password
  };

  console.log('Login Data:', user);

  this.userService.userLogin(user).subscribe({
    next: (res) => {
      console.log('Login Success', res);
      // 👉 redirect or store token here
      if(res==true){
        this.router.navigate(['/home']); 
      }else{
        this.errorMassage = `Something not matching userId:- <b>${user.userId}</b>`;
      }
      
    },
    error: (err) => {
      console.error('Login Failed', err);
       this.errorMassage = `Something not matching userId:- <b>${user.userId}</b>`;
    }
  });
  }
}