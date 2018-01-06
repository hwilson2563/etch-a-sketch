var container = document.getElementById("drawing");
var shack = document.getElementById("shack");
var red = document.getElementById("container");
var setGrid = document.getElementById("setGrid");
Grid(100);
function color() {
	var boxes = document.querySelectorAll(".box");
	boxes.forEach(function(item) { 
		item.addEventListener("mouseover",function(){
			this.classList.remove("box");
			this.setAttribute("class","select");
		})
	});
}
function Grid(x) {
	container.style.setProperty('--grid', x);
	for (var i = 0; i < x; i++){
		for (var j = 0; j < x; j++) {
		var div = document.createElement("div");
		div.setAttribute("class","box");
		container.appendChild(div);
		}
	}
	color();
}
setGrid.addEventListener("click", function(){
	var answer = prompt("what size grid would you like?");
	console.log(answer);
	red.setAttribute("class","shack");
	var selected = document.querySelectorAll(".select");
	selected.forEach(function(item){
		item.classList.remove("select");
		item.setAttribute("class","box");
	})
	var goAgain = setTimeout(function(){ 
		red.classList.remove("shack");
	},1000);
	goAgain;
	Grid(answer);
	return;
})
shack.addEventListener("click", function(){
	red.setAttribute("class","shack");
	var selected = document.querySelectorAll(".select");
	selected.forEach(function(item){
		item.classList.remove("select");
		item.setAttribute("class","box");
	})
	var goAgain = setTimeout(function(){ 
		red.classList.remove("shack");
	},1000);
	goAgain;
})
