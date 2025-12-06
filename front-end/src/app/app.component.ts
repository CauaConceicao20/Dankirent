import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObjectService } from './services/objects/object.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dankirent';

  constructor(private objectService: ObjectService) { }

  ngOnInit() {
    this.objectService.inicializarProdutos();
  }

}
