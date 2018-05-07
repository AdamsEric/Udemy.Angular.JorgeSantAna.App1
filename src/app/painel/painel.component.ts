import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from './../shared/models/frase.model';
import { FRASES } from './frases-mock';

@Component({
   selector: 'app-painel',
   templateUrl: './painel.component.html',
   styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
   public instrucao: string = 'Traduza a frase: ';
   public frases: Frase[] = FRASES;
   public resposta: string;

   public rodada: number = 0;
   public rodadaFrase: Frase;

   public progresso: number = 0;
   public tentativas: number = 5;

   @Output()
   public encerrarJogo: EventEmitter<string> = new EventEmitter();

   constructor() {
      this.atualizarRodada();
   }

   ngOnInit() {
   }

   public atualizarResposta(resposta: Event): void {
      this.resposta = (<HTMLInputElement>resposta.target).value;
   }

   public verificarResposta(): void {
      if (this.resposta === this.rodadaFrase.frasePtBr) {
         this.rodada++;
         this.atualizarRodada();
         this.progresso += (100 / this.frases.length);

         if (this.progresso === 100) {
            this.encerrarJogo.emit('vitoria');
         }

      } else {
         this.tentativas--;
         if (this.tentativas === 0) {
            this.encerrarJogo.emit('derrota');
         }
      }
   }

   public atualizarRodada(): void {
      this.rodadaFrase = this.frases[this.rodada];
      this.resposta = '';
   }
}
