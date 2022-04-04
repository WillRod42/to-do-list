Describe: addTask()

Test: "It should return unedited to-do list if the given task is already in the list"
Code:
let list = new ToDoList();
list.addTask("test123");
list.addTask("test123");
Expected-Output: 
{
  {
    "task123": {task: "test123", finished: false}
  }
}

Test: "It should return a task object if given a non-empty string"
Code:
let list = new ToDoList();
list.addTask("test123");
Expected-Output: 
{
  {
    "task123": {task: "test123", finished: false}
  }
}



Describe: removeTask()

Test: "It should return unedited to-do list if the given task is not in the list"
Code:
let list = new ToDoList();
list.removeTask("test123");
Expected-Output: 
{
  {}
}

Test: "It should return to-do list without given task if task is in the list"
Code:
let list = new ToDoList();
list.addTask("test123");
list.removeTask("test123");
Expected-Output: 
{
  {}
}



Describe: finishTask()

Test: "It should return unedited to-do list if the given task is not in the list"
Code:
let list = new ToDoList();
list.finishTask("test123");
Expected-Output: 
{
  {}
}

Test: "It should return to-do list with given task's finished property equal to true"
Code:
let list = new ToDoList();
list.addTask("test123");
list.finishTask("test123");
Expected-Output: 
{
  {
    "task123": {task: "test123", finished: true}
  }
}