import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { CadastroUsuarios } from './cadastro-usuarios/cadastro-usuarios';
import { CriacaoProjetos } from './criacao-projetos/criacao-projetos';
import { CriacaoEquipes } from './criacao-equipes/criacao-equipes';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'home',
    component: Home,
    children: [
      { path: 'cadastro-usuarios', component: CadastroUsuarios },
      { path: 'criacao-projetos', component: CriacaoProjetos },
      { path: 'criacao-equipes', component: CriacaoEquipes },
    ],
  },
];