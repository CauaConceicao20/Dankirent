import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthenticationService } from '../../services/auth/authentication.service';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  public announcetProduct(): void {
    if (this.authenticationService.isLogged()) {
      this.router.navigate(['/announcet']);
      return;
    }

    ModalComponent.open({
      title: "Entre para continuar",
      message: "Você precisa estar conectado para criar um anúncio. Acesse sua conta ou registre-se rapidamente.",
      confirmText: "Entrar",
      cancelText: "Cancelar",
      action: () => {
        ModalComponent.close();
        this.router.navigate(['/login']);
      }
    });
  }
}