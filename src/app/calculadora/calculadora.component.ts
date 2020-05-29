import { Component, OnInit } from '@angular/core';
import { Calculadora } from '../Model/CalculadoraImpl';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  currentNumber : any = '0';
  private calculadora: Calculadora;
  
  constructor() {
    this.calculadora = new Calculadora();
  }

  ngOnInit(): void {
  }

  public getNumber(v: string) {
       console.log(v);
       this.calculadora.getNumber(v);
       this.currentNumber = this.calculadora.getCurrentNumber();
  }
  public getOperation(op: string) {
    console.log(op);
    this.calculadora.getOperation(op);
    this.currentNumber = this.calculadora.getCurrentNumber();
  }
  getDecimal(){
    console.log("getDecimal");
    this.calculadora.getDecimal();
    this.currentNumber = this.calculadora.getCurrentNumber();
  }

  public clear(){
    console.log("clear");
    this.calculadora.clear();
    this.currentNumber = this.calculadora.getCurrentNumber();
  }


}
