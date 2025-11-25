import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ExplorarComponent } from './pages/explorar/explorar.component';
import { SearchComponent } from './pages/search/search.component';
import { AnnouncetComponent } from './pages/announcet/announcet.component';

export const routes: Routes =[
  {path: '', component: ExplorarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'explorar', component: ExplorarComponent},
  {path: 'search', component: SearchComponent},
  {path: 'announcet', component: AnnouncetComponent}
];
