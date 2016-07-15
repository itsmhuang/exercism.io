var Words = function() {};

Words.prototype.count = function(words) {
	//to lower case
	//replace regex with one space (remove tabs after converting to arr)
	//convert to array
	var arr = words.toLowerCase()
				.replace(/\s/g, " ")
				.split(" ");

	//remove tabs (empty string in array element)
	arr = arr.filter(function(e) {
		return e != "";
	});

	var expectedCounts = Object.create(null);
	arr.forEach(function(ele){
		!(expectedCounts[ele]) ? expectedCounts[ele]=1 : expectedCounts[ele]++;
	});
	
	return expectedCounts;
};

module.exports = Words;











