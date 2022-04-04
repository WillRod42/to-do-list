function ToDoList() {
  this.tasks = {};
}

ToDoList.prototype.addTask = function(taskDesc) {
  if (!this.tasks[taskDesc]) {
    this.tasks[taskDesc] = new Task(taskDesc);
  } 
}

ToDoList.prototype.removeTask = function(taskDesc) {
  delete this.tasks[taskDesc];
}

ToDoList.prototype.finishTask = function(taskDesc) {
  if (this.tasks[taskDesc]) {
    this.tasks[taskDesc].finished = true;
  }
}

function Task(taskDesc) {
  this.task = taskDesc;
  this.finished = false;
}