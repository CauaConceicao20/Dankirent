import { Component, Input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthenticationService } from '../../services/auth/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @Input() idUser?: number;
  @Input() sideMenuIsVisible: Boolean = false;
  @Input() optionMenuSelect : String = "Explorar";
  @Input() options!: String[];

  public user: User | null;
  public isLogged : boolean;

  public constructor(private authService : AuthenticationService, private router : Router) {
    this.isLogged = authService.isLogged();
    this.user = this.isLogged ? authService.getUserLogged() : null;
  }

  public viewProfile(id?: number) {
    if (id === undefined || id === null) {
      return;
    }
    this.router.navigate(['/profile', id]);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
