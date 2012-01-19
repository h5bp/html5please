/* Author: Divya Manian, Paul Irish, et al 

*/

// gtieX augments. so a search is matching .gtie8, 
// need to match .gtie7 and .gtie6 too
var ies = ['gtie10', 'gtie9', 'gtie8', 'gtie7', 'gtie6'];


var	search = document.getElementById('livesearch'),
    searchresults = document.querySelectorAll('.features article'),
    searchurl = document.getElementById('searchurl');	

ies.map(function(ie, ieindex) {
  [].map.call(searchresults, function(result) {
    var classes = classList(result);
    if(classes.contains(ie)){
      ies.slice(ieindex +1).forEach(function(classname) {
        classes.add(classname);
      });
    }  
  });
});

var listOptions = {
		listClass: 'features',
		valueNames: ['kind', 'status', 'name', 'tags']
	},
  featureList = new List('gfs', listOptions);
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
