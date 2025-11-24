import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() optionNavSelect!: String;

  select(item: string) {
    this.optionNavSelect = item;
  }
}
