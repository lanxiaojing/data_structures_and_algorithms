function Grade(score) {
	this.scores = [];
	this.add = add;
	this.avr = avr;
}

function add (score) {
	return this.scores.push(score);
}

function avr () {
	var sa;(
		for (var i = 0; i < this.scores.length; i++) {
			sa += this.scores[i];
		}
		return sa/this.scores.length;
	}
	
	
	2.9.2
	function SaveWords(wordsArr) {
		this.words = wordsArr || [];
		this.add =add;
		this.show = show;
		this.reverseShow = reverseShow
	}
	
	function add (word) {
		this.words.push(word);
	}
	
	function show () {
		var arr = this.words;
		return arr.sort();
	}
	
	function reverseShow () {
		var arr = this.words;
		return arr.sort().reverse();
	}
	
	
	// 归并排序
	function foo (data) {
		var first = parseInt(data.length/2),
			second = data.length - first,
			tmp,
			label = 0,
			arr1 = [],
			arr2 = [];
		if (data.length <= 1) return data;
		for (var i = 0; i < first; i++) {
			arr1.push(data[i]);
		}
		for (var j = 0; j < second; j++) {
			arr2.push(data[j])
		}
		
		foo(arr1);
		foo(arr2);
	}




