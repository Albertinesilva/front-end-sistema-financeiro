import { Component, Input } from '@angular/core';
import { Pessoa } from '../../core/interface/Pessoa';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent {

  @Input() pessoas: Pessoa[] = [];

}
