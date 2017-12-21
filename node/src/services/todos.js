import * as todoDao from '../dao/todo';

export function getAllTasks() {
  return todoDao.fetchAll();
}

export function createTask(task) {
  return todoDao.createTask(task);
}

export function updateTask(task) {
  return todoDao.updateTask(task);
}

export function buildTasks(tasks) {
  let data = [];

  tasks.forEach((task) => {
    let temp = {
      taskId: task.taskid || '',
      status: task.status || '',
      taskName: task.taskname || '',
      createdAt: task.createdat || '',
      updatedAt: task.updatedat || '',      
      branchName: task.branchname || '',
      projectName: task.projectname || '',
      taskDescription: task.taskdescription || ''
    }
    data.push(temp)
  });

  return data;
}