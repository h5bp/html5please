/* Author: 

*/


var listOptions = {
		listClass: 'features',
		valueNames: ['kind', 'status', 'name', 'tags']
	},
	featureList = new List('gfs', listOptions),
	search = document.getElementById('livesearch'),
    searchresults = document.querySelectorAll('.features article'),
    searchurl = document.getElementById('searchurl');	

search.onkeyup = updatesearch;

function updatesearch() {
  if (search.value != '') {
    searchurl.href='./#' + search.value;
    searchurl.style.height = "2.5em";
    for (var i = 0, len = searchresults.length; i < len; i++) {
        classList(searchresults[i]).add('expanded');
    }
  } else {
    searchurl.style.height = "0";
    for (var i = 0, len = searchresults.length; i < len; i++) {
        classList(searchresults[i]).remove('expanded');
    }
  }
}

var expandfeatures = document.querySelectorAll('.features article header'),
    count = expandfeatures.length;
    
for(var i = 0; i < count; i++) {
  expandfeatures[i].onclick = function(e) {
      e = e || window.event;
      var node = e.target || e.srcElement;
      var parent = node.parentNode;
      classList(parent).toggle('expanded');
      node.setAttribute('title', node.getAttribute('title') == 'expand' ? 'minimize' : 'expand');
  };
}    

if(window.location.hash) {
  var hash = /^#(.*)/.exec(window.location.hash)[1];
  search.value = hash;
  featureList.search(hash);
  updatesearch();
}