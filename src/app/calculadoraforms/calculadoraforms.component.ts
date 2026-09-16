import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
      selector: "app-calculadoraforms",
      imports: [FormsModule, CommonModule],
      templateUrl: "./calculadoraforms.component.html",
      styleUrl: "./calculadoraforms.component.css",
})
export class CalculadoraformsComponent {

      n1 : number = 0;
      n2 : number = 0;
      result : number = 0;

      calcularSoma(){
            this.result = this.n1 + this.n2;
      }
}
