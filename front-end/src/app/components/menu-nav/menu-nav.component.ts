import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-nav',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './menu-nav.component.html',
  styleUrl: './menu-nav.component.scss'
})
export class MenuNavComponent {
  @Input() menuVisible: Boolean = false;
  @Input() options!: String[];

}
