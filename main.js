var button=document.getElementById('change-background');

button.addEventListener('click',function(){
	document.body.style.backgroundcolor='tomato';
});

var button1=document.getElementById('change-background1');

button1.addEventListener('dblclick',function(){
	document.body.style.backgroundcolor = 'blue';
});

var button2=document.getElementById('change-background2');

button2.addEventListener('mouseenter',function(){
	document.body.style.backgroundcolor = 'orange';
});

var button3=document.getElementById('change-background3');

button3.addEventListener('click',function(){
	document.body.style.backgroundcolor = 'yellow';
} );