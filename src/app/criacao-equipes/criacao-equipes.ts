import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criacao-equipes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criacao-equipes.html',
  styleUrl: './criacao-equipes.scss',
})
export class CriacaoEquipes {
  equipe = {
    nome: '',
    descricao: '',
    membros: [
      { id: '1', nome: 'Bruno' },
      { id: '2', nome: 'Felipe' },
      { id: '3', nome: 'Lucas' },
      { id: '4', nome: 'Davi' },
      { id: '5', nome: 'Rafael' },
    ],
  };

  salvar() {
    console.log('Dados do equipe:', this.equipe);
    // Aqui você pode adicionar a lógica para salvar os dados
  }
}
