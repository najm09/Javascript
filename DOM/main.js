var button = document.getElementById('change-background');

var button2 = document.getElementById('change-background2');

var button3 = document.getElementById('change-background3');

var button4 = document.getElementById('change-background4');

button.addEventListener("click",function() {
	document.body.style.backgroundcolor = 'tomato';
});

button2.addEventListener('dblclick',function() {
	document.body.style.backgroundcolor = 'orange';
});

button3.addEventListener('mouseenter',function() {
	document.body.style.backgroundcolor = 'blue';
});

button4.addEventListener('mouseout',function(){
	document.body.style.backgroundcolor = 'yellow';
});