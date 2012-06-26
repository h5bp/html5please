/* Author: Divya Manian, Paul Irish, et al

*/

/* predef: classList */

// el.innerText / el.textContent helper
var text;
if (document.body.innerText) {
  text = function (el, v) { return v ? el.innerText = v : el.innerText; };
} else if (document.body.textContent) {
  text = function (el, v) { return v ? el.textContent = v : el.textContent; };
}

// el.addEventListener / el.attachEvent helper
var addEvent;
if (window.attachEvent) {
  addEvent = function (el, ev, cb) { el.attachEvent("on" + ev, cb); };
} else if (window.addEventListener) {
  addEvent = function (el, ev, cb, capture) { el.addEventListener(ev, cb, capture); };
}

// gtieX augments. so a search is matching .gtie8,
// need to match .gtie7 and .gtie6 too
var ies = ['gtie6', 'gtie7', 'gtie8', 'gtie9', 'gtie10'];


var	search = document.getElementById('livesearch'),
    searchresults = document.querySelectorAll('.features article'),
    searchurl = document.getElementById('searchurl'),
    currentActiveHash,
    lastActiveHash;

[].map.call(searchresults, function(result) {
  var tags = result.querySelector('.tags'),
      tagslist = text(tags).split(' '),
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
  featureList = new List('gfs', listOptions),
  noitemsNotification = document.querySelector('#noitems');
  search.onkeyup = updatesearch;

function updatesearch() {


  classList(document.body)[ search.value !== '' ? 'add' : 'remove']('searchvalue');

  if (search.value != '') {
    searchurl.href='./#' + search.value;
    searchurl.className = 'active';
    for (var i = 0, len = searchresults.length; i < len; i++) {
        classList(searchresults[i]).add('expanded');
        searchresults[i].querySelectorAll('h2')[0].setAttribute("aria-expanded", "true");
    }

    if (!document.querySelectorAll('.expanded').length) {
      classList(noitemsNotification).remove('visuallyhidden');
    } else {
      classList(noitemsNotification).add('visuallyhidden');
    }

  } else {
    searchurl.className = '';
    for (var i = 0, len = searchresults.length; i < len; i++) {
        classList(searchresults[i]).remove('expanded');
        searchresults[i].querySelectorAll('h2')[0].setAttribute("aria-expanded", "false");
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
      var h2 = node.querySelectorAll('h2')[0];
      classList(parent).toggle('expanded');
      h2.setAttribute("aria-expanded", h2.getAttribute("aria-expanded") == "false" ? "true" : "false");
  };

  var h2elem = expandfeatures[i].querySelectorAll('h2')[0];
  h2elem.setAttribute("tabIndex","0");
  h2elem.setAttribute("role","button");
  h2elem.setAttribute("aria-expanded","false");

  h2elem.onkeydown = function(e) {
    if(e.keyCode === 13 || e.keyCode === 32 ){
      e.preventDefault();
      e = e || window.event;
      var node = e.target || e.srcElement;
      var grandParent = node.parentNode.parentNode;
      node.setAttribute("aria-expanded", node.getAttribute("aria-expanded") == "false" ? "true" : "false");
      classList(grandParent).toggle('expanded');
    }
  };

  h2elem.onclick = function(e) {
    e = e || window.event;
    var node = e.target || e.srcElement;
    var grandParent = node.parentNode.parentNode;
    node.setAttribute("aria-expanded", node.getAttribute("aria-expanded") == "false" ? "true" : "false");
    classList(grandParent).toggle('expanded');
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
  currentActiveHash = document.querySelector('a[href="#' + hash +'"]');
  lastActiveHash    && classList(lastActiveHash).remove('active');
  currentActiveHash && classList(currentActiveHash).add('active');
  lastActiveHash = currentActiveHash;

  updatesearch();
};

// keyboard shortcut for / to go to search box.
addEvent(window, 'keyup', function(e){
  if (e.which == 191 && document.activeElement != search)
    search.focus();
});

var moredetails = document.getElementById("clickmore");

moredetails.onclick = function(e) {
  e || (e = window.event);
  var target = e.target || e.srcElement;

  classList(target).toggle('active');
  classList(document.getElementById(/#(.*)/.exec(target.href)[1])).toggle('active');
  e.preventDefault && e.preventDefault();
};
