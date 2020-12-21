$(function() {
	var d = "<div class='hrart-img'><img src='img/xin2.png' /><div>"
	setInterval(function() {
		var f = $(document).width();
		var e = Math.random() * f - 100;
		var o = 0.5 + Math.random();
		var fon = 10 + Math.random() * 50;
		var l = e - 100 + 200 * Math.random();
		var k = 2000 + 5000 * Math.random();
		$(d).clone().appendTo(".hrart").css({
			left: e + "px",
			opacity: o,
			"font-size": fon,
		}).animate({
			top: "800px",
			left: l + "px",
			opacity: 0.1,
		}, k, "linear", function() {
			$(this).remove()
		})
	}, 300)
})