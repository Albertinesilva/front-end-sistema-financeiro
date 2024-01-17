import { Component } from '@angular/core';


@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrl: './funcionario-card.component.css'
})
export class FuncionarioCardComponent {

  funcionario: { id: number, nome: string } = { id: 1, nome: 'Albert'};
}
