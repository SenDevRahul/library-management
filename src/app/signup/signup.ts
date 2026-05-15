import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
})
export class Signup {

  constructor(private userService:UserService,private router:Router){}
  
  user:User={
    userId:'',
    firstName:'',
    lastName:'',
    password:''
  };

  errorMassage:string='';

  onSignup() {
    //console.log('Signup Data:', this.name, this.email, this.password);
    console.log(this.user);
    this.userService.signUp(this.user).subscribe({
    next: (res) => {
      console.log('Login Success', res);
      // 👉 redirect or store token here
      if(res==true){
          this.router.navigate(['/login']); 
      }else{
         this.errorMassage = `Something not matching userId:- <b>${this.user.userId}</b>`;
      }
      
    },
    error: (err) => {
      console.error('Login Failed', err);
      this.errorMassage = `Something not matching userId:- <b>${this.user.userId}</b>`;
    }
  });
  }
}