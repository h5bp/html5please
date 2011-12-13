/* Author: 

*/


var listOptions = {
		listClass: 'features',
		valueNames: ['name', 'recco']
	},
	featureList = new List('gfs', listOptions);
	
document.getElementById('livesearch').addEventListener('search', function() {
	featureList.search(this.value, listOptions.valueNames);
}, false);