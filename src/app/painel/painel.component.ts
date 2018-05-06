import { Component, OnInit } from '@angular/core';
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

   constructor() { }

   ngOnInit() {
   }

}
