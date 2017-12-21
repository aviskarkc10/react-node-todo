import { getClient } from '../database';
import { v4 as uuid } from 'uuid';

let client = getClient();

export function fetchAll() {
  return new Promise((resolve, reject) => {
    client
      .query('select * from tasks')
      .then(response => {
        resolve(response.rows);
      }).catch(error => {
        reject(error);
      });
  });
}

export function createTask(task) {
  return new Promise((resolve, reject) => {
    task.createdAt = task.updatedAt = new Date().toISOString();
    task.taskId = uuid();

    client
      .query("insert into tasks (taskid, taskname, taskdescription, status, projectname, createdat, updatedat, branchname) values ($1, $2, $3, $4, $5, $6, $7, $8)", 
      [ task.taskId,
        task.taskName, 
        task.taskDescription,
        task.status,         
        task.projectName, 
        task.createdAt,
        task.updatedat,
        task.branchName])
      .then((response) => resolve(response))
      .catch(error => reject(error))
  });
}

export function updateTask(task) {
  return new Promise((resolve, reject) => {
    task.updatedAt = new Date().toISOString();

    client
      .query("update tasks SET taskname=($1), taskdescription=($2), status=($3), projectname=($4), updatedat=($5), branchname=($6) where taskid=($7)", 
      [ task.taskName, 
        task.taskDescription,
        task.status,         
        task.projectName, 
        task.updatedAt,
        task.branchName,
        task.taskId])
      .then((response) => resolve(response))
      .catch(error => reject(error))
  })
}
