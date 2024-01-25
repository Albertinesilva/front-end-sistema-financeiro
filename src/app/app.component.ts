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

  funcionarios: Funcionario[] = [];

  aoAdicionar(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }
  
}