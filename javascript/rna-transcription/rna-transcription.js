var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
	var output = "";
	for (var i = 0; i < input.length; i++) {
		if (input[i] === "C") {
			output += "G";
		}
		else if (input[i] === "G") {
			output += "C";
		}
		else if (input[i] === "T") {
			output += "A";
		}
		else if(input[i] === "A") {
			output += "U";
		}

	}
	return output;
};

module.exports = DnaTranscriber;
