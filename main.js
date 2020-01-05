var button = document.getElementById('change-background');

button.addElementListener('click',function () {
	document.body.style.backgroundcolor = 'tomato';
});

var button1 = document.getElementById('change-background1');

button1.addElementListener('dblclick',function(){
	document.body.style.backgroundcolor = 'orange';
});

var button2 = document.getElementById('change-background2');

button2.addElementListener('mouseenter',function(){
	document.body.style.backgroundcolor = 'blue';
});

var button3 = document.getElementById('change-background3');

button3.addElementListener('mouseenter',function(){
	document.body.style.backgroundcolor = 'yellow';
});