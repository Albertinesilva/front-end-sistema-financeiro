import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  funcionarios: Funcionario[] = [];

  aoAdicionar(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }
  
}

interface Funcionario {
  id: number
  nome: string
}