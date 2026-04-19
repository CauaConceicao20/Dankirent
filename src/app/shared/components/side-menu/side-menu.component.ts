import { Component, Input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthenticationService } from '../../../core/services/auth/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.model';
import { UserLogged } from '../../../models/userLogged.model';
import { UserService } from '../../../core/services/user/user.service';
import { environments } from '../../../../environments/environments';


@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @Input() idUser?: number;
  @Input() sideMenuIsVisible: Boolean = false;
  @Input() optionMenuSelect: String = "Explorar";
  @Input() options!: String[];

  public storageURL = environments.apiUrl;

  public user: User | null = null;
  private userLogged: UserLogged | null = null;
  public isLogged: boolean = false;

  constructor(private authService: AuthenticationService, private userService: UserService, private router: Router) {
    this.authService.getUserLogged().subscribe(user => {
      this.userLogged = user;
      this.isLogged = this.authService.loggedSignal();
      if (this.isLogged) {
        this.userService.getById(this.userLogged!.id).subscribe(user => {
          this.user = user;
          console.log(user.photoName);
        })
      }
    });
  }

  public viewProfile(id?: number) {
    if (id === undefined || id === null) {
      return;
    }
    this.router.navigate(['/profile', id]);
  }

  public logout(): void {
    console.log('clicou logout');
    this.authService.logout().subscribe();
  }
}
