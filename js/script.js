/* Author: 

*/


var radios = document.querySelectorAll('input[type="radio"]'), cells = document.querySelectorAll('tbody tr:not(.title)');
    
for(var i = 0, j = radios.length; i < j; i++) {
  radios[i].onclick = (function(i) { return function(e) {
    for(var z = 0, y = cells.length; z < y; z++) {
      console.log(cells[z].classList, radios[i].value);
      if(!cells[z].classList.contains(radios[i].value)) {
        cells[z].classList.add('hide');        
      } else {
        cells[z].classList.remove('hide');                
      }   
    }
  }
})(i);
}    
    
    
    






















