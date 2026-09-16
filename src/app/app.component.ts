import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  imports:[CalculadoraComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conceitos';
}
