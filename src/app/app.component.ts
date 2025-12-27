import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjectService } from './services/objects/object.service';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dankirent';

  constructor(private objectService: ObjectService) {}

  ngOnInit() {
    this.objectService.inicializarProdutos();
  }

}
