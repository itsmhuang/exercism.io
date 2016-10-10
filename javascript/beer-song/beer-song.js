var BeerSong = function() {};

BeerSong.prototype.verse = function(input){
	var subtract = input - 1;
	var bottleAmount = " bottles";
	var secondBottleAmount = " bottles";
	var pronoun = " one ";
	if(input === 2){
		// bottleAmount = " bottles";
		secondBottleAmount = " bottle";
	}
	if(input === 1){
		bottleAmount = " bottle";
		subtract = "no more";
		pronoun = " it ";
	}
	if (input === 0){
		// input = "No more";
		// firstPartOfSong = input + bottleAmount + " of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, ";
		// subtract = "99";
		return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
	}
	var firstPartOfSong = input + bottleAmount + " of beer on the wall, " + input + bottleAmount + " of beer.\nTake" + pronoun + "down and pass it around, ";
	var secondPartOfSong = subtract + secondBottleAmount + " of beer on the wall.\n";
	return firstPartOfSong + secondPartOfSong;
    // ' bottles of beer on the wall,  bottles of beer.\nTake one down and pass it around,  bottles of beer on the wall.\n';

      //'1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';

   // 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

};

BeerSong.prototype.sing = function(input, end){
	var addVerse = "";
	var args = Array.prototype.slice.call(arguments);
	if (args.length ===1){
		end = 0;
	}
	if (input > end){
		addVerse+= BeerSong.prototype.verse(input)+"\n";
		return BeerSong.prototype.sing(input-=1,end);
	}
	else if (input === end){
		addVerse+= BeerSong.prototype.verse(input);
		var finalVerse = addVerse;
		addVerse = "";
		return finalVerse;
	}
	// else {
	// }
};



module.exports = BeerSong;




// BeerSong.prototype.verse = function(input) {
// 	var expected = "";
	
// 	if(input === 0) {
// 		expected = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
// 	}
// 	else if(input === 1) {
// 		expected = input+ " bottle of beer on the wall, " +input+ " bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
// 	}
// 	else {
// 		expected = input+ " bottles of beer on the wall, " +input+ " bottles of beer.\nTake one down and pass it around, " +(input-1)+ " bottles of beer on the wall.\n";
// 	}
// 	return expected;
// };

// BeerSong.prototype.sing = function(input1, input2) {
// 	expected = "";
// 	//if 2 arguments
// 	if(arguments.length === 2) {
// 	//sing up to input2 with loop
// 	//when hit i = 1, sing last 2 verses
// 	}

// 	//if 1 argument
// 	//start from it and sing the rest
// }
