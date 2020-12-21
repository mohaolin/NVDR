var oWrap = document.getElementById("wrap");
var picture = oWrap.getElementsByTagName("img");

//让盒子自适应的垂直居中
function mTop() {
	//获取浏览器窗口可视区域的高度
	var Height = document.documentElement.clientHeight;
	oWrap.style.marginTop = Height / 2 - 50 + "px"
}
mTop();
window.onresize = mTop;

//图片初始动画
var number = picture.length; //获取图片的个数

var Deg = 360 / number; //每一张图片所占的角度
for(var i = 0; i < number; i++) {
	//console.log(i);
	picture[i].style.transform = "rotateY(" + i * Deg + "deg) translateZ(360px)";
	picture[i].style.transition = "1s " + (number - 1 - i) * 0.1 + "s";
}
//鼠标事件(按下 移动 抬起) 拖拽旋转
var lastX, lastY, nowX, nowY, minX, minY, roX = 0,
	roY = 0,
	timer;
document.onmousedown = function(ev) {
	clearInterval(timer);
	var ev = ev || window.event;
	//获取鼠标按下去的坐标位置
	lastX = ev.clientX;
	lastY = ev.clientY;
	this.onmousemove = function(ev) {
		var ev = ev || window.event;
		//移动过程中鼠标的坐标位置
		nowX = ev.clientX;
		nowY = ev.clientY;
		//计算出鼠标坐标的差值
		minX = nowX - lastX;
		minY = nowY - lastY;
		//计算容器旋转的角度
		roY += minX * 0.2;
		roX -= minY * 0.1;
		//让整个图片容器跟随鼠标动
		oWrap.style.transform = "rotateX(" + roX + "deg) rotateY(" + roY + "deg)";
		lastX = nowX;
		lastY = nowY;
	}
	this.onmouseup = function() {
		this.onmousemove = null;
		this.onmouseup = null;
		timer = setInterval(function() {
			minX *= 0.95; 
			minY *= 0.95;
			roY += minX * 0.2;
			roX -= minY * 0.1;
			oWrap.style.transform = "rotateX(" + roX + "deg) rotateY(" + roY + "deg)";
			//当minX达到足够小的值时 清楚定时器
			if(Math.abs(minX) < 0.1 && Math.abs(minY) < 0.1) {
				clearInterval(timer);
			}
		}, 1000 / 60);
	}
	return false; 
}