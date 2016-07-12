var Bob = function() {};

Bob.prototype.hey = function(input) {
	//remove spaces from input
	var noSpaces = input.replace(/\s/g, "");
	//then remove numbers and comma
	var letters = noSpaces.replace(/[0-9,]/g, "");
	//no characters, nothing or just spaces
	if (!input.replace(/\s/g, "").length) {
		return "Fine. Be that way!"
	}
 	//all letters are uppercase
	else if(letters.length > 1 && letters === letters.toUpperCase()) {
		return "Whoa, chill out!"
	}	
	//ask question - ends with ?
	else if(input.charAt(input.length-1) === "?") {
		return "Sure.";
	}
	//everything else, return whatever
	else {
		return "Whatever.";
	}		
};

module.exports = Bob;

