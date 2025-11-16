import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  optionNavSelect : String = "explorar";

  select(item: string) {
    this.optionNavSelect = item;
  }
}
