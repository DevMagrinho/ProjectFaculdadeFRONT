import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements AfterViewInit, OnInit {
  email = '';
  senha = '';
  mensagemErro: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // const container = this.elementRef.nativeElement.querySelector('#container');
    // const registerBtn = this.elementRef.nativeElement.querySelector('#register');
    // const loginBtn = this.elementRef.nativeElement.querySelector('#login');
    // registerBtn?.addEventListener('click', () => {
    //   container?.classList.add('active');
    // });
    // loginBtn?.addEventListener('click', () => {
    //   container?.classList.remove('active');
    // });
  }

  login() {
    this.mensagemErro = null; // Limpa a mensagem de erro anterior
    // 4. Agora você pode acessar os valores aqui
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);

    // Exemplo: Redirecionar se o login for válido
    if (this.email == 'admin@gmail.com' && this.senha == 'admin') {
      this.router.navigate(['/home']);
    } else {
      this.mensagemErro = 'Email ou senha incorretos!';
    }
  }
}
