/* Author: Divya Manian, Paul Irish, et al 

*/

// gtieX augments. so a search is matching .gtie8, 
// need to match .gtie7 and .gtie6 too
var ies = ['gtie6', 'gtie7', 'gtie8', 'gtie9', 'gtie10'];


var	search = document.getElementById('livesearch'),
    searchresults = document.querySelectorAll('.features article'),
    searchurl = document.getElementById('searchurl');	

[].map.call(searchresults, function(result) {
  var tags = result.querySelector('.tags'),
      tagslist = tags.textContent.split(' '),
      ielist = tagslist.filter(function(tag) {
        return tag.match(/gtie.*/);
      });

  tagslist.push('showall');

  var ieindex = ies.indexOf(ielist[0]);
  if(ieindex != -1){
    tagslist = tagslist.concat(ies.slice(ieindex + 1));
  }
  tags.textContent = tagslist.join(' ');  
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
  };
}    

var clicktags = document.querySelectorAll('.explore-features a');

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

var moredetails = document.getElementById("clickmore");

moredetails.onclick = function(e) {
  classList(e.target).toggle('active');
  classList(document.getElementById(/#(.*)/.exec(e.target.href)[1])).toggle('active');
  e.preventDefault();
};
