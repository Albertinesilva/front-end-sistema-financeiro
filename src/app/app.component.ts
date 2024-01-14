import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = ''
  idade = 43;

  getIdade(){
    return this.idade;
  }

  adicionar(nome: string) {
    this.nome = nome;
  }

  // alterarNome(event: any) {
  //   // console.log(event);
  //   this.nome = event.target.value;
  // }

  // alterarNome(event: any) {
  //   console.log(event.target.value);
  // }
}
