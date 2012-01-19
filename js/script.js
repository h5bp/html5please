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
    searchurl.className = 'active';
    for (var i = 0, len = searchresults.length; i < len; i++) {
        classList(searchresults[i]).add('expanded');
    }
  } else {
    searchurl.className = '';
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

var clicktags = document.querySelectorAll('.featuretags a');

[].map.call(clicktags, function(tag) {
  tag.onclick = function(e) {
    showsearch(/#(.*)/.exec(tag.href)[1]);
  };  
});

if(window.location.hash) {
  showsearch(/^#(.*)/.exec(window.location.hash)[1]);
}

function showsearch(hash) {
  search.value = hash;
  featureList.search(hash);
  updatesearch();
};

// keyboard shortcut for / to go to search box.
addEventListener('keyup', function(e){
  if (e.which == 191 && document.activeElement != search)
    search.focus();
});
