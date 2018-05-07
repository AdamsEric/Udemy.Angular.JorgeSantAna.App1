export class Coracao {
   constructor(
      public cheio: boolean
   ) { }

   public exibeCoracao() {
      if (this.cheio) {
         return './assets/coracao_cheio.png';
      } else {
         return './assets/coracao_vazio.png';
      }
   }
}