// const copyLink = document.getElementById('copyLink');

// copyLink.onclick = () => {
//   navigator.clipboard.writeText(window.location.href);
//   copyLink.classList.add('copied')

//   setInterval(() => {
//     copyLink.classList.remove('copied')
//   }, 2500);

// }

let message = 'Hello World';
message = 'Goodbye';

const something = 'Ooga Booga';

// something = 'Pew Pew';

console.log(something);

console.log(message);

const copyLink = document.getElementById('copyLink')

let timerRef

copyLink.onclick = () => {

  navigator.clipboard.writeText(window.location.href)
  copyLink.classList.add('copied')
  
  const remove = () => {
    copyLink.classList.remove('copied')
  }

  clearInterval(timerRef)

  timerRef = setInterval(remove, 500)

}
