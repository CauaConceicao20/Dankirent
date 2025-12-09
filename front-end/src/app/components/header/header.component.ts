import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, MenuNavComponent, SideMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() optionNavSelect!: String;
  public user : User;

  public isLogged: boolean;
  public menuDesktopIsVisible: Boolean = false;
  public menuMobileIsVisible: Boolean = false;
  public optionsDesktop: String[] = ["Meu Perfil", "Termos de Uso", "Sair"];
  public optionsMobile: String[] = ["Explorar", "Buscar", "Anunciar", "Meus Objetos", "Reservas",
    "Meu perfil", "Sair"];

  public constructor(private auth: AuthenticationService) {
    this.isLogged = auth.isLogged();
    this.user = auth.getUserLogged();
  }

  public select(item: string) : void {
    this.optionNavSelect = item;
  }

}
