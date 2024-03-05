import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrl: './funcionario-card.component.css'
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  //No input, podemos passar um alias para o atributo que será recebido pelo componente filho (funcionario-card).
  @Input('func') funcionario: any;

  getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }
  
  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }

  // getClassesCss() {
  //   return ['badge', 'badge-default'];
  // }
}
