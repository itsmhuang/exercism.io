function Gigasecond(gs) {
	this.date = function() {
		var newDate = new Date(gs);
		newDate.setUTCSeconds( (newDate.getUTCSeconds() + 1000000000) );
		return newDate;
	}
}

module.exports = Gigasecond;


