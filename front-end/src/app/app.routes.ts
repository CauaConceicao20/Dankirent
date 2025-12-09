import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ExplorarComponent } from './pages/explorar/explorar.component';
import { SearchComponent } from './pages/search/search.component';
import { AnnouncetComponent } from './pages/announcet/announcet.component';
import { MyObjectsComponent } from './pages/my-objects/my-objects.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ObjectComponent } from './pages/object/object.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guard/auth.guard';
import { TermsUseComponent } from './pages/terms-use/terms-use.component';
import { UpdateObjectComponent } from './pages/update-object/update-object.component';

export const routes: Routes =[
  {path: '', redirectTo: 'explore', pathMatch: 'full'},
  {path: 'login', component: LoginComponent,},
  {path: 'register', component: RegisterComponent},
  {path: 'explore', component: ExplorarComponent},
  {path: 'search', component: SearchComponent},
  {path: 'announcet', component: AnnouncetComponent, canActivate: [authGuard]},
  {path: 'my-objects', component: MyObjectsComponent, canActivate: [authGuard]},
  {path: 'reservations', component: ReservationsComponent, canActivate: [authGuard]},
  {path: 'object/:id', component: ObjectComponent},
  {path: 'profile/:id', component: ProfileComponent, canActivate: [authGuard]},
  {path: 'terms', component: TermsUseComponent},
  {path: 'update-object/:id', component: UpdateObjectComponent, canActivate: [authGuard]}
];
