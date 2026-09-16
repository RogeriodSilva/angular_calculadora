import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  n1: number = 0;
  n2: number = 0;
  result: number = 0;
  mode : string = "+"

  calc(){
    this.result = 
    this.mode == "+" ? this.n1 + this.n2 : 
    this.mode == "-" ? this.n1 - this.n2 :
    this.mode == "*" ? this.n1 * this.n2 :
    this.n1 / this.n2
  }
}
