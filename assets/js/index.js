import { customSelector as $, Clock } from "./utils.js";

function Question(container, min = 1, max = 10) {
 var score = localStorage.getItem('score');
 this.scoreDOM = container.querySelector('.question-game--score');
 this.questionDOM = container.querySelector('h2');
 this.inputDOM = container.querySelector('input');
 this.submitDOM = container.querySelector('button');
 // this.inputDOM = container.querySelector('input');
 this.score = !score ? 0 : JSON.parse(score);
 this.numberOne = Math.floor(Math.random() * (max - min + 1)) + min
 this.numberTwo = Math.floor(Math.random() * (max - min + 1)) + min;

 this.correctAns = this.numberOne * this.numberTwo;

 this.eventListeners = function () {
  var $this = this;
  $this.submitDOM.addEventListener('click', function () {
   $this.userAns = container.querySelector('input').value;
   console.log($this.userAns);
   if (!$this.userAns) {
    alert('Type Somthing');
    $this.inputDOM.focus();
    return;
   }
   // If Correct 
   if (+$this.userAns === $this.correctAns) {
    $this.score++;

   } else {
    $this.score--
   }
   localStorage.setItem('score', JSON.stringify($this.score));
   $this.reset();

  })
 }

 this.reset = function () {
  this.numberOne = Math.floor(Math.random() * (max - min + 1)) + min
  this.numberTwo = Math.floor(Math.random() * (max - min + 1)) + min;
  this.correctAns = this.numberOne * this.numberTwo
  this.scoreDOM.innerText = 'score: ' + this.score;
  this.questionDOM.innerText = 'What is ' + this.numberOne + ' multiply by ' + this.numberTwo + ' ?';
  this.inputDOM.focus();
  this.inputDOM.value = '';
 }
 this.init = function () {
  this.reset();
  this.eventListeners();
 }
 this.init();
 window.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
   this.submitDOM.click();
  }
 }.bind(this));
}

function App() {
 // Question Setup
 const container = $('.question-game');
 const question = new Question(container, 5, 10);
}





document.addEventListener('DOMContentLoaded', function () {
 new App();
})



// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(<App />);