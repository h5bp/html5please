/* Author: 

*/


var listOptions = {
		listClass: 'features',
		valueNames: ['name', 'recco']
	},
	featureList = new List('gfs', listOptions);
	
	var search = document.getElementById('livesearch'),
	    searchresults = document.querySelectorAll('.features article'),
	    searchurl = document.getElementById('searchurl');	
	
	search.addEventListener('keyup', updatesearch);


function updatesearch() {
  if(search.value != '') {
    searchurl.href='/#' + search.value;
    searchurl.style.opacity = 1;    
    Array.prototype.forEach.call(searchresults, function(result) {
        result.classList.add('expanded');
    });	    	    
  } else {
    searchurl.style.opacity = 0;
    Array.prototype.forEach.call(searchresults, function(result) {
        result.classList.remove('expanded');
    });	    	    	    
  }
}

var expandfeatures = document.querySelectorAll('a.expand'),
    count = expandfeatures.length;
    
for(var i = 0; i < count; i++) {
  expandfeatures[i].onclick = (function(e, i) {    
    return function(e) {
      var parent = e.target.parentNode.parentNode;
      if(!parent.classList.contains('expanded')) {
        parent.classList.add('expanded');
      } else {
        parent.classList.remove('expanded');
      }      
      e.preventDefault();
    };
  })(i);
}    

if(window.location.hash) {
  var hash = /^#(.*)/.exec(window.location.hash)[1];
  search.value = hash;
  featureList.search(hash);
  updatesearch();
}