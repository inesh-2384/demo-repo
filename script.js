class Calculator {
  constructor(previousdisplaytext, currentdisplaytext){
    this.previousDisplay = previousdisplaytext ;
    this.currentDisplay = currentdisplaytext ;
    this.clear() ;
  }
  clear(){
    this.previousDisplay.innerText = '' ;
    this.currentDisplay.innerText = '' ;
  }
  chooseOperation(operation){
   if (this.currentDisplay === '') return;
   if(this.previousDisplay.innerText != ''){
    this.compute();
   }
   this.previousDisplay.innerText = this.currentDisplay.innerText + operation ;
   this.currentDisplay.innerText = '';
  }

  

  append_numbers(number){
    if(number === '.' && this.currentDisplay.innerText.includes('.'))return;
    this.currentDisplay.innerText +=  number;
  }
  //in js strings are immutable.meaning methods like slice() do not modify the original string but return a new string
  delete(){
    this.currentDisplay.innerText = this.currentDisplay.innerText.slice(0,-1);
  }
  compute(){
    let computation;
    let opr = this.previousDisplay.innerText.slice(-1); // Get the last character as the operation
    let current = parseFloat(this.currentDisplay.innerText);
    let previous = parseFloat(this.previousDisplay.innerText);
    
    if (isNaN(current) || isNaN(previous)) return;
    switch(opr) {
      case '+':
          computation = previous + current;
          break;
      case '-':
          computation = previous - current;
          break;
      case '*':
          computation = previous * current;
          break;
      case '/':
          computation = previous / current;
          break;
      default:
          return;
  }


  this.currentDisplay.innerText = computation;
  this.previousDisplay.innerText = '';
  
  }
  
}








const numbers = document.querySelectorAll('[data-number]') ;
const operations = document.querySelectorAll('[data-operation]') ;
const AC = document.querySelector('[data-clearall]') ;
const del = document.querySelector('[data-delete]') ;
const equating = document.querySelector('[data-compute]') ;
const previousDisplay = document.querySelector('[data-previousoutputtext]');
const currentDisplay = document.querySelector('[data-currentoutputtext]');

const calculator = new Calculator(previousDisplay , currentDisplay) ;

numbers.forEach(button =>{
    button.addEventListener( 'click', ()=>{
      calculator.append_numbers(button.innerText);
      
    });
});

operations.forEach(button =>{
  button.addEventListener('click', ()=>{
    calculator.chooseOperation(button.innerText);
  });
});

AC.addEventListener('click' , ()=>{
  calculator.clear();
  
});

del.addEventListener('click',()=>{
  calculator.delete();
  
});

equating.addEventListener('click',()=>{
  calculator.compute();
  
});