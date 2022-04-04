function ToDoList() {
  this.tasks = {};
}

ToDoList.prototype.addTask = function(taskDesc) {
  if (!this.tasks[taskDesc] && taskDesc !== "") {
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

function Task(taskDesc) {
  this.task = taskDesc;
}

function finishTaskUI() {
  $(this).prev().addClass("finished");
  $(this).remove();
}

function removeTaskUI(event) {
  let taskDesc = $(this).siblings().first().text();
  event.data.list.removeTask(taskDesc);
  $(this).parent().remove();
}

function createTaskUI(taskDesc, toDoList) {
  let task = $("<li></li>");
  task.append("<span>" + taskDesc + "</span>");

  let finishBtn = $("<button class='finish btn btn-success'>finish</button>");
  let removeBtn = $("<button class='remove btn btn-danger'>remove</button>");

  finishBtn.click(finishTaskUI);
  removeBtn.click({list: toDoList}, removeTaskUI);

  task.append(finishBtn);
  task.append(removeBtn);

  return task;
}

$(document).ready(function() {
  let toDo = new ToDoList();

  $("form").submit(function(e) {
    e.preventDefault();
    if (toDo.addTask($("#task").val())) {
      $("#to-do-list ul").append(createTaskUI($("#task").val(), toDo));
    }
  });
});