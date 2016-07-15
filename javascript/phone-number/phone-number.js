function PhoneNumber(phone) {
	this.number = function() {
		var clean = phone.replace(/\D/g,"");
		if(clean.length <=9 || clean.length > 11) {
			return "0000000000";
		}
		else if(clean.length ===11) {
			if(clean.charAt(0) === "1") {
				return clean.slice(1);
			}
			return "0000000000";
		}
		return clean;
	}
	this.areaCode = function() {
		return phone.slice(0,3);
	}
	this.toString = function() {
		var arr = phone.split("");
		arr.splice(0,0,"(");
		arr.splice(4,0,") ");
		arr.splice(8,0,"-");
		return arr.join("");
	}
}

module.exports = PhoneNumber;
