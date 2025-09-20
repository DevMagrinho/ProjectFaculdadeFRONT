import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements AfterViewInit, OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // ngOnInit é um bom lugar para inicializar a lógica do componente.
  }

  ngAfterViewInit(): void {
    const container = this.elementRef.nativeElement.querySelector('#container');
    const registerBtn = this.elementRef.nativeElement.querySelector('#register');
    const loginBtn = this.elementRef.nativeElement.querySelector('#login');

    registerBtn?.addEventListener('click', () => {
      container?.classList.add('active');
    });

    loginBtn?.addEventListener('click', () => {
      container?.classList.remove('active');
    });
  }
}
