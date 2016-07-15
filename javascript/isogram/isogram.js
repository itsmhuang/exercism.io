function Isogram(word) {
	this.isIsogram = function() {
		//lowercase, remove - and whitespace and convert to arr
		var arr = word.toLowerCase()
					.replace(/\-|\s/g,"")
					.split('');

		//may be inefficient
		var uniq = arr.filter(function(e,i,a) {
			return i === a.indexOf(e);
		})

		//test if filtered any letters
		if(uniq.length === arr.length) {
			return true;
		}
			return false;
		

	}
}

module.exports = Isogram;


