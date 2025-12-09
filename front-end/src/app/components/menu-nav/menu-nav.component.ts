import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-menu-nav',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './menu-nav.component.html',
  styleUrl: './menu-nav.component.scss'
})
export class MenuNavComponent {
  @Input() idUser! : number;
  @Input() menuVisible: Boolean = false;
  @Input() options!: String[];

  public constructor(private authService: AuthenticationService, private router : Router) {
  }

  public viewProfile(id: number) {
    this.router.navigate(['/profile', id]);
  }

  public logout(): void {
    this.authService.logout();
  }

}
