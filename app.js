var angle = 0;
// function galleryspin(sign) { 
// spinner = document.querySelector("#spinner");
// if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
// spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
// }


function galleryspin() { 
    spinner = document.querySelector("#spinner");
    angle = angle - 45
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    }

    function setIntervalWithDelay(callback, delay) {
        function interval() {
          callback();
          setTimeout(interval, delay);
        }
        
        setTimeout(interval, delay);
      }
      
      setIntervalWithDelay(galleryspin, 1000);    
      