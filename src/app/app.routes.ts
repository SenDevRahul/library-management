import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'signup',
    component: Signup
  },
   {
    path: 'home',
    component: Home,

     children: [
      { path: 'dashboard', component: Dashboard },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // default child
    ]
  }
];
