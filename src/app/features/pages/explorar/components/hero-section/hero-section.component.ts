import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthenticationService } from '../../../../../core/services/auth/authentication.service';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  constructor(private authenticationService : AuthenticationService, private router : Router) {}

  public announcetProduct() : void {
    if(this.authenticationService.loggedSignal()) {
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
