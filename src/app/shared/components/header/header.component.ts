import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { AuthenticationService } from '../../../core/services/auth/authentication.service';
import { User } from '../../../models/user.model';
import { UserLogged } from '../../../models/userLogged.model';
import { UserService } from '../../../core/services/user/user.service';
import { environments } from '../../../../environments/environments';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, MenuNavComponent, SideMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() optionNavSelect!: String;

  public user : User | null = null;
  public userLogged: UserLogged | null = null;
  public isLogged: boolean = false;

  public storageURL = environments.apiUrl;


  public menuDesktopIsVisible: Boolean = false;
  public menuMobileIsVisible: Boolean = false;
  public optionsDesktop: String[] = ["Meu Perfil", "Termos de Uso", "Sair"];
  public optionsMobile: String[] = ["Explorar", "Buscar", "Anunciar", "Meus Objetos", "Reservas",
    "Meu perfil", "Sair"];


  constructor(private authService: AuthenticationService, private userService : UserService) {
    this.authService.getUserLogged().subscribe(userLogged => {
      this.userLogged = userLogged;
      this.isLogged = this.authService.loggedSignal();
        if(this.isLogged) {
      this.userService.getById(this.userLogged!.id).subscribe( user => {
        this.user = user;
      })
    }
    });
  }

  public select(item: string): void {
    this.optionNavSelect = item;
  }

}
