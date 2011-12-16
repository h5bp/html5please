/* Author: 

*/


var listOptions = {
		listClass: 'features',
		valueNames: ['name', 'recco']
	},
	featureList = new List('gfs', listOptions);
	
document.getElementById('livesearch').addEventListener('search', function() {
}, false);

var expandfeatures = document.querySelectorAll('a.expand'),
    count = expandfeatures.length;
    
for(var i = 0; i < count; i++) {
  expandfeatures[i].onclick = (function(e, i) {    
    return function(e) {
      var parent = e.target.parentNode.parentNode;
      console.log(parent);
      if(!parent.classList.contains('expanded')) {
        parent.classList.add('expanded');
      } else {
        parent.classList.remove('expanded');
      }      
    };
  })(i);
}    
