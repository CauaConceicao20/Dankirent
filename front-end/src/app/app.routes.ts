import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ExplorarComponent } from './pages/explorar/explorar.component';

export const routes: Routes =[
  {path: '', component: ExplorarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'explorar', component: ExplorarComponent}
];
