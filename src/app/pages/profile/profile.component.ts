import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { ObjectService } from '../../services/objects/object.service';
import { ImageService } from '../../services/image-service/image.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public isEditing: Boolean = false;
  public user: User | null = null;
  public productsUser: number;

  public constructor(private route: ActivatedRoute, private userService: UserService, private objectService: ObjectService,
    private imageService: ImageService, private router : Router, private authService : AuthenticationService) {
    this.user = this.userService.getById(Number(this.route.snapshot.paramMap.get('id')));
    this.productsUser = this.objectService.getProductsOfUser().length;
  }

  public async onPhotoSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      try {
        const base64Images = await this.imageService.convertFiles(input.files, 1);
        if (base64Images.length > 0 && this.user) {
          this.user.photoUrl = base64Images[0];
        }
      } catch (error) {
        alert('Erro ao processar imagem: ' + error);
      }
    }
  }

  public saveChanges(): void {
    if (this.user) {
      try {
        this.userService.updateUser(this.user);
        this.isEditing = false;
        ModalComponent.open({
          title: "Atualizado com sucesso",
          message: "Precisamos que você faça login novamente para que as alterações sejam aplicadas",
          confirmText: "Ok",
          cancelText: null,
          action: () => {
            ModalComponent.close();
            this.router.navigate(['/login']);
            this.authService.logout();
          }
        });
      } catch (error) {
        alert('Erro ao atualizar perfil: ' + error);
      }
    }
  }

  public cancelEdit(): void {
    this.user = this.userService.getById(Number(this.route.snapshot.paramMap.get('id')));
    this.isEditing = false;
  }
}
