(function(){
	var calc = function(){
		var docElement = document.documentElement;
		var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
		// 相当于font-size以20为基准
		docElement.style.fontSize = 20*(clientWidthValue/375) + 'px';
	}
	calc();
	window.addEventListener('resize',calc);
})();