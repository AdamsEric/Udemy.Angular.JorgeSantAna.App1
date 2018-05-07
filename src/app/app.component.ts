import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   public jogoEmAndamento: boolean = true;
   public resultado: string;

   public encerrarJogo(tipo: string): void {
      this.jogoEmAndamento = false;
      this.resultado = tipo;
   }

   public reiniciarJogo(): void {
      this.jogoEmAndamento = true;
      this.resultado = undefined;
   }
}
