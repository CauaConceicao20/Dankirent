import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-announcet',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './announcet.component.html',
  styleUrl: './announcet.component.scss'
})
export class AnnouncetComponent {
  public announcet : String = "announcet";
}
