import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, MenuNavComponent, SideMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() optionNavSelect!: String;

  public menuDesktopIsVisible : Boolean = false;
  public menuMobileIsVisible : Boolean = false;
  public optionsDesktop : String[] = ["Meu Perfil", "Sair"];
  public optionsMobile : String[] = ["Explorar", "Buscar", "Anunciar", "Meus Objetos", "Reservas", 
    "Meu perfil", "Sair"];

  public select(item: string) {
    this.optionNavSelect = item;
  }
}
