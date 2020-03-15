
  var form = document.querySelector('form');
  var todolist = document.querySelector('ul');
  var button = document.querySelector('button');
  var input = document.getElementById('user-todo');

  // declare variable 'todosArray' to our todos.
  // use localStorage setItem method to set todos to a string with JSON.stringify().
  // JSON.stringify() is used because localStorage works with strings.this is how we 
  // sent data to local storage.

  //we want to ask if there are already 'todos' in localStorage. if so, then we will get those 'todos'
  //using JSON.parse . if localStorage doesnot have any 'todos' then we will set our 'todosArray' to
  //an empty array. 

  var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];



  localStorage.setItem('todos',JSON.stringify(todosArray));

  // Declare a variable storage that contains all the information in local storage .
  // we will assign to storage JSON.parse() method that converts string from local 
  // storage into data we can access with Javascript.
  //when recieving the data from a web server the data is always a string.
  //parse the data with JSON.parse(),and the data becomes a javascript object.

  var storage = JSON.parse(localStorage.getItem('todos'));


  form.addEventListener('submit',function(e){
      e.preventDefault();

      //push onto 'todosArray' the 'input.value'

      todosArray.push(input.value);
      
      //on the localStorage now use 'setItem()' for the key 'todos' the value
      // of the todosArray as a string with the 'JSON.stringify()' method.
  
      localStorage.setItem('todos',JSON.stringify(todosArray));
      todoMaker(input.value);
      input.value = "";
  });

  var todoMaker = function(text){
      var todo = document.createElement('li');
      todo.textContent = text;
      todolist.appendChild(todo);
  }

  for (var i = 0; i < storage.length; i++) {
todoMaker(storage[i]);
}


  button.addEventListener('click',function(){
      localStorage.clear();
      while(todolist.firstChild){
          todolist.removeChild(todolist.firstChild);
      }
  });