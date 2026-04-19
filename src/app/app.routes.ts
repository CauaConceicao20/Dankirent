import { Routes } from '@angular/router';
import { LoginComponent } from './features/pages/login/login.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { ExplorarComponent } from './features/pages/explorar/explorar.component';
import { SearchComponent } from './features/pages/search/search.component';
import { AnnouncetComponent } from './features/pages/announcet/announcet.component';
import { MyObjectsComponent } from './features/pages/my-objects/my-objects.component';
import { ReservationsComponent } from './features/pages/reservations/reservations.component';
import { ObjectComponent } from './features/pages/object/object.component';
import { ProfileComponent } from './features/pages/profile/profile.component';
import { authGuard } from './core/guard/auth.guard';
import { TermsUseComponent } from './features/pages/terms-use/terms-use.component';
import { UpdateObjectComponent } from './features/pages/update-object/update-object.component';

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
