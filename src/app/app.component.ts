import { Component } from '@angular/core';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@Component({
  imports:[ListaComprasComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conceitos';
}
