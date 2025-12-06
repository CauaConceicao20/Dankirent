import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthenticationService } from '../../services/auth/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @Input() sideMenuIsVisible: Boolean = false;
  @Input() optionMenuSelect : String = "Explorar";
  @Input() options!: String[];

  public isLogged : boolean;

  public constructor(private authService : AuthenticationService) {
    this.isLogged = authService.isLogged();
  }

  public logout(): void {
    this.authService.logout();
  }
}
