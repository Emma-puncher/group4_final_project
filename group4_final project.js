var intro = document.getElementById("intro");
intro.addEventListener("click", goToIntro);
function goToIntro() {
	window.location.assign("file:///Users/zhengyujie/Desktop/Introduction.html");
}

var ex1 = document.getElementById("ex1");
ex1.addEventListener("click", goToEx1);
function goToEx1() {
	window.location.assign("file:///Users/zhengyujie/Desktop/example1.html");
}

var ex2 = document.getElementById("ex2");
ex2.addEventListener("click", goToEx2);
function goToEx2() {
	window.location.assign("file:///Users/zhengyujie/Desktop/example2.html");
}

var future = document.getElementById("future");
future.addEventListener("click", goToFuture);
function goToFuture() {
	window.location.assign("file:///Users/zhengyujie/Desktop/future.html");
}

var reference = document.getElementById("reference");
reference.addEventListener("click", goToRef);
function goToRef() {
	window.location.assign("file:///Users/zhengyujie/Desktop/reference.html");
}