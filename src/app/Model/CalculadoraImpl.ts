export class Calculadora {
    //represental numero actual
    private currentNumber: string = '0';    
    //primero operando ingresado 
    private firstOperand: number = null;
    //operador de la operacion que esta realizando 
    private operator: string = null;
    //flag para indicar si espera segundo numero 
    private waitForSecondNumber: boolean = false;


    public getCurrentNumber(): string {
        return this.currentNumber;
    }

    public getNumber(v: string) {
        console.log(v);
        if (this.waitForSecondNumber) {
            this.currentNumber = v;
            this.waitForSecondNumber = false;
        } else {
            this.currentNumber === '0' ? 
            this.currentNumber = v : this.currentNumber += v;

        }
    }

    private doCalculation(op: string, secondOp) {
        switch (op) {
            case '+':
                return this.firstOperand += secondOp;
            case '-':
                return this.firstOperand -= secondOp;
            case '*':
                return this.firstOperand *= secondOp;
            case '/':
                return this.firstOperand /= secondOp;
            case '=':
                return secondOp;
        }
    }


    public getOperation(op: string) {
        console.log(op);
        //si no tengo primero operando asigno a el numero ingresado 
        if (this.firstOperand === null) {
            this.firstOperand = Number(this.currentNumber);
            console.log("entro por aqui 1 ");
        } else {
            if (this.operator) {
                console.log("entro por aqui 2 ");
                const result = 
                this.doCalculation(this.operator, Number(this.currentNumber))
                this.currentNumber = String(result);
                this.firstOperand = result;
            }
        } 
        console.log("entro por aqui 3 ");
        //resguardo el operador ingresado
        this.operator = op;
        //luego de ingresar el operador indico que el siguiente es el segundo operando
        this.waitForSecondNumber = true;
    }

    public clear() {
        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
    }

    public getDecimal() {
        if (!this.currentNumber.includes('.')) {
            this.currentNumber += '.';
        }
    }

}