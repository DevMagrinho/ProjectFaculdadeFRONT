import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criacao-projetos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criacao-projetos.html',
  styleUrl: './criacao-projetos.scss',
})
export class CriacaoProjetos {
  projeto = {
    nome: '',
    descricao: '',
    dataInicio: '',
    dataTermino: '',
    status: '',
    gerente: '',
  };

  salvar() {
    console.log('Dados do projeto:', this.projeto);
    // Aqui você pode adicionar a lógica para salvar os dados
  }
}
