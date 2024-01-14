import { Component } from '@angular/core';

interface Funcionario {
  id: number
  nome: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ultimoId = 0;
  nome = 'Albert';
  idade = 43;
  adicionado = false;
  funcionarios: Funcionario[] = [];

  getIdade() {
    return this.idade;
  }

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }

// adicionar() {
//   console.log(`Adicionando ${this.nome}`);
//   this.adicionado = true;

//   const numero = Math.round(Math.random() * 100);
//   this.nome = 'Albert ' + numero;

// }

// adicionar(nome: string) {
//   this.nome = nome;
// }

// alterarNome(event: any) {
//   // console.log(event);
//   this.nome = event.target.value;
// }

// alterarNome(event: any) {
//   console.log(event.target.value);
// }

}