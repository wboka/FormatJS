var Format = {
	date: {
		locale: function(d) {
			return d.toLocaleString();
		}			
	},
	string: {
		pluralize: function(n, s) {
			return n.toString() + " " + s + (n === 1 ? "" : (s.charAt(s.length -1).toLowerCase() === "s" ? "es" : "s"));
		}
	}
};
