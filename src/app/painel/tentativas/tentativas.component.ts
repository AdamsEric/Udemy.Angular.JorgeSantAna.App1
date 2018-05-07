import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coracao } from './../../shared/models/coracao.model';

@Component({
   selector: 'app-tentativas',
   templateUrl: './tentativas.component.html',
   styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {

   @Input() tentativas: number;

   public coracoes: Coracao[] = [
      new Coracao(true),
      new Coracao(true),
      new Coracao(true),
      new Coracao(true),
      new Coracao(true)
   ];

   constructor() { }

   ngOnInit() {

   }

   ngOnChanges(changes: SimpleChanges): void {
      if (this.tentativas !== this.coracoes.length) {
         this.coracoes[this.coracoes.length - (this.tentativas + 1)].cheio = false;
      }
   }

}
