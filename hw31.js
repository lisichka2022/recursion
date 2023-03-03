'use strict'

let calculator = {
    read() {
        this.firstNum = +prompt('input first', 0);
        this.secondNum = +prompt('input second', 0);
      },
      sum() {
        return this.firstNum+this.secondNum;
      },
      mul(){
        return this.firstNum *this.secondNum;
      }
    }
    calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );