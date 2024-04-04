import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao = '';

  public constructor(nome = '', email = '') {
    this.nome = nome;
    this.email = email;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  cliente = new Cliente();

  profissoes = ['Engenheiro', 'Professor', 'Químico', 'Programador', 'Outra'];

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;

    console.log(form);
    // console.log(this.cliente);
  }
}
