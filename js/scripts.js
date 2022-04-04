function ToDoList() {
  this.tasks = {};
}

ToDoList.prototype.addTask = function(taskDesc) {
  if (!this.tasks[taskDesc]) {
    this.tasks[taskDesc] = new Task(taskDesc);
    return true;
  } else {
    return false;
  }
}

ToDoList.prototype.removeTask = function(taskDesc) {
  if (this.tasks[taskDesc]) {
    delete this.tasks[taskDesc];
    return true;
  } else {
    return false;
  }
}

ToDoList.prototype.finishTask = function(taskDesc) {
  if (this.tasks[taskDesc]) {
    this.tasks[taskDesc].finished = true;
    return true;
  } else {
    return false;
  }
}

function Task(taskDesc) {
  this.task = taskDesc;
  this.finished = false;
}

function 

function createTaskUI(taskDesc) {
  let task = $("<li></li>");
  task.text(taskDesc);

  let finishBtn = $("<button class='finish btn btn-success'>finish</button>");
  let removeBtn = $("<button class='remove btn btn-danger'>remove</button>");

  /*
    Add click methods here
  */

  task.append(finishBtn);
  task.append(removeBtn);

  return task;
}

$(document).ready(function() {
  let toDo = new ToDoList();

  $("form").submit(function(e) {
    e.preventDefault();
    if (toDo.addTask($("#task").val())) {
      $("#to-do-list ul").append(createTaskUI($("#task").val()));
    }
  });
});