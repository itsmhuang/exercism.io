var Bob = function() {};

Bob.prototype.hey = function(input) {
	//remove spaces, numbers and comma
	var letters = input.replace(/\d|,|\s/g, "");
	
	//no characters, nothing or just spaces
	if(!input.trim()) {
		return "Fine. Be that way!";
	}
 	//all letters are uppercase
	else if(letters.length > 1 && letters === letters.toUpperCase()) {
		return "Whoa, chill out!";
	}	
	//ask question - ends with ?
	else if(input.slice(-1) === "?") {
		return "Sure.";
	}
	//everything else, return whatever
		return "Whatever.";
};

module.exports = Bob;

