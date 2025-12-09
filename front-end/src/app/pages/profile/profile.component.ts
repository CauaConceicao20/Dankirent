import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { ObjectService } from '../../services/objects/object.service';

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

  public constructor(private route: ActivatedRoute, private userService: UserService, private objectService : ObjectService) {
    this.user = this.userService.getById(Number(this.route.snapshot.paramMap.get('id')));
    this.productsUser = this.objectService.getProductsOfUser().length;

  }
}
