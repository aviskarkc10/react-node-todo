import config from '../config';
import http from '../utils/http';

const { endpoints } = config.api;

export async function fetchTasks() {
  const { data } = await http.get(endpoints.standupAssistant);

  return data;
}

export async function createTask(task) {
  const { data } = await http.post(endpoints.standupAssistant, task);

  return data;
}

export async function updateTask(task) {
  const { data } = await http.put(endpoints.standupAssistant, task);

  return data;
}