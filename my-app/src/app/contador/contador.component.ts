import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  valor: number = 5;
  timeoutId: any;

  public adicionar(): void  {
    this.valor++;
  }

  public subtrair():void{
    this.valor--;
  }

  public adicionarPressionado(): void  {
    this.adicionar();
    this.timeoutId = setInterval(() => {
      if (this.valor < 10) {
        this.adicionar();
      }
      else
        this.parar();
    }, 150);
  }
  
  public subtrairPressionado(): void  {
    this.subtrair();
    this.timeoutId = setInterval(() => {
      if (this.valor > 0) {
        this.subtrair();
      }
      else
        this.parar();
    }, 150);
  }
  
  public parar(): void {
    clearInterval(this.timeoutId);
  }

}
