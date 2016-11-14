function () {
	var temp = 10;

	function multifilter() {
		var outerArguments = arguments;
		return function (el) {
			var result = true;
			for (var i = 0; i < outerArguments.length; i++) {
				result = result && outerArguments[i](el);
			}
			return result;
		}
	}

	function isEven(el) {
		return el % 2 === 0;
	}

	function isGTTen(el) {
		return el > temp;
	}
	var result = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14].filter(multifilter(isEven, isGTTen));
	console.log(result);
	console.log(numbers(1234));
}();