import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ItemLista } from "./itemLista";
import { CommonModule } from "@angular/common";

@Component({
      selector: "app-lista-compras",
      imports: [FormsModule, CommonModule],
      templateUrl: "./lista-compras.component.html",
      styleUrl: "./lista-compras.component.css",
})
export class ListaComprasComponent {
      item: string = "";
      lista: ItemLista[] = [];

      adicionar() {
            if (this.item.trim() != "") {
                  let itemLista = new ItemLista();
                  itemLista.item = this.item;
                  itemLista.id = this.lista.length + 1;

                  this.lista.push(itemLista);
                  this.item = "";
            }
      }

      comprado(item: ItemLista) {
            item.check != item.check;
      }

      limpar() {
            this.lista = [];
      }
}
