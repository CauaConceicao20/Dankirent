import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  @Input() sideMenuIsVisible: Boolean = false;
  @Input() optionMenuSelect : String = "Explorar";
  @Input() options!: String[];

  public constructor(private authService : AuthenticationService) {
  }

  public logout(): void {
    this.authService.logout();
  }
}
