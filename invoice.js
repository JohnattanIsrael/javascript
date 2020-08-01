// evry type of function in javascriots is an object

function Invoice() {
    this.taxRate = 0.06;
}
// this gets treated as an object not as a function
const inv  = new Invoice();
console.log(inv.taxRate)

// pretty much everything in javascrit is an object

function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subTotal = subTotal;

    this.total = setInterval(() => {
        console.log((this.taxRate * this.subTotal) + this.subTotal);
    }, 2000);
}

const inv = new Invoice(200);
inv.total();//what?
// this is the object that is executing the current function



function SavingCalc(paycheck) {
    this.percent = 0.30;
    this.paycheck = paycheck;
    
    this.deposit = piggyBank => {
      return (this.percent * this.paycheck)
    }
}
  
const piggyBank = new SavingCalc(2000);
piggyBank.deposit();
/*
>
> function SavingCalc(paycheck) {
...     this.percent = 0.30;
...     this.paycheck = paycheck;
...     
...     this.deposit = piggyBank => {
.....       return (this.percent * this.paycheck)
.....     }
... }
undefined
> const piggyBank = new SavingCalc(2000);
undefined
> console.log(piggyBank.deposit());
600
undefined
> piggyBank.deposit();
600
*/
