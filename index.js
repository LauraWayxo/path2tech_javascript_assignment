const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  },

  {
    title: "2nd ToDo",
    description: "This is the second todo",
    complete: false,
  },

  {
    title: "3rd ToDo",
    description: "This is the third todo",
    complete: false,
  },
];

 
function addTodo(newTodo){
  todos.push(newTodo)
  console.log("New Todo: ", newTodo);
}

function removeTodo(titleToRemove) {
  const index = todos.findIndex(todo => todo.title === titleToRemove);
  if (index !== -1) {
    todos.splice(index, 1);
    console.log("Todo Removed:", titleToRemove);
  } else {
    console.log("Todo not found:", titleToRemove);
  }
}

function editTodo(title, updatedTodo) {
    // const todoIndex = todos.findIndex(todo => todo.title === title);
    // if (todoIndex !== -1) {
    //   todos[todoIndex] = updatedTodo;
    //   console.log("Todo Updated:", updatedTodo);
    // } else {
    //   console.log("Todo not found:", title);
    // }
  
  
  // replace the object values 
  if (title >= 0 && todo.title < todos.length) {
    todos = updatedTodo
    console.log('Edit this Todo:' + todo.description + 'updated' + updatedTodo)
  }
}

function markTodoComplete() {
    // const todoIndex = todos.findIndex(todo => todo.title === title);
    // if (todoIndex !== -1) {
    //   todos[todoIndex].complete = true;
    //   console.log("Todo Marked Complete:", title);
    // } else {
    //   console.log("Todo not found:", title);
    // }
  
  //   if ([] >= 0 && [] < todos.length) {
//     todos[].complete = true;
//   console.log('Todo' + [] + 'is completed');
//   } else {
//     console.log('That todo is not created')
//   }

  for(todos.complete in todos === true);
    console.log('This task is complete');
  if(todos.complete === false);
    console.log('This task is NOT complete')
}

function displayTodoLength(){
  return todos.length;
}

function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array
  console.log("Here is a list of your todos: ")
  // You will need to call your methods above this comment to edit the todos array
  
  // Print the length of the todos array below this comment
  console.log('You have', displayTodoLength(), 'total tasks');
  // Print the length of the todos array above this comment

  // Iterate over the todos array and console.log each todo below this comment
  todos.forEach((todo) => console.log(`Title of todo: ${todo.title} 
    Details of the Todo: ${todo.description} 
    Task complete? ${todo.complete}`))
  // .forEach()
}

app();