function Pangram(pangram) {
	this.isPangram = function() {
		//convert to lower case and remove _, whitespace, ., digits
		var filtered = pangram.replace(/\_|\s|\.|[0-9]/g, "");
		var found = filtered.match(/([a-z])(?!.*\1)/gi);
		if(pangram === "") {
			return false;
		}
		else if(found.length === 26) {
			return true;
		}
		else {
			return false;
		}

	}
}

module.exports = Pangram;
