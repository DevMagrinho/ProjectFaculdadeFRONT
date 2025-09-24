import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-cadastro-usuarios',
  standalone: true,
  imports: [FormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './cadastro-usuarios.html',
  styleUrl: './cadastro-usuarios.scss',
})
export class CadastroUsuarios implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;
  readonly snackBar = inject(MatSnackBar);

  usuario = {
    nomeCompleto: '',
    cpf: '',
    email: '',
    cargo: '',
    login: '',
    senha: '',
  };

  senhaVisivel = false;

  constructor() {}

  ngOnInit(): void {}

  salvar() {
    console.log('Dados do usuário:', this.usuario);
    // lógica para enviar os dados para o backend

    const snackBarRef = this.snackBar.open('Usuário criado com Sucesso', '', {
      duration: 1500,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
    });

    // Limpa o formulário e reseta seu estado DEPOIS que o snackbar desaparecer
    snackBarRef.afterDismissed().subscribe(() => {
      this.userForm.resetForm();
    });
  }

  toggleVisibilidadeSenha() {
    this.senhaVisivel = !this.senhaVisivel;
  }
}
