const buttons = document.querySelectorAll('.button');
const whiteButtons = document.querySelectorAll('.buttonWhite');
const darkDisplayResult = document.querySelector('.display-result-dark');
const whiteDisplayResult = document.querySelector('.display-result-white');

function darkDisplay () {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.innerHTML === 'AC') {
        darkDisplayResult.innerHTML = '';        
      } else if (button.innerHTML === 'Del') {
          if (darkDisplayResult.innerHTML.length > 1) {
            darkDisplayResult.innerHTML = darkDisplayResult.innerHTML.substring(0, darkDisplayResult.innerHTML.length - 1);
          } else {
            darkDisplayResult.innerHTML = '';
          }
      } else if (button.innerHTML === '=') {
        const expression = darkDisplayResult.innerHTML.replaceAll('x', '*').replaceAll('÷', '/');
  
        darkDisplayResult.innerHTML = eval(expression);                
      } else {
        darkDisplayResult.innerHTML += button.innerHTML;
      }
    });
  });
}

darkDisplay();


function whiteDisplay () {
  whiteButtons.forEach(buttonWhite => {
    buttonWhite.addEventListener('click', () => {
      if (buttonWhite.innerHTML === 'AC') {
        whiteDisplayResult.innerHTML = "";
      } else if (buttonWhite.innerHTML === 'Del') {
        if (whiteDisplayResult.innerHTML.length > 1) {
          whiteDisplayResult.innerHTML = whiteDisplayResult.innerHTML.substring(0, whiteDisplayResult.innerHTML.length - 1); 
        } else {
          whiteDisplayResult.innerHTML = '';
        }
      } else if (buttonWhite.innerHTML === '=') {
        const expression = whiteDisplayResult.innerHTML.replaceAll('x', '*').replaceAll('÷', '/');

        whiteDisplayResult.innerHTML = eval(expression);
      } else {
        whiteDisplayResult.innerHTML += buttonWhite.innerHTML;
      }
    });
  });
}

whiteDisplay();

