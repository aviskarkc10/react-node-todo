import pg from 'pg';

const connectionString = 'postgres://postgres:lakers24@localhost:5432/standup_assistant';
const client = new pg.Client(connectionString);

export function connectClient() {
  client.connect();
}

export function getClient() {
  if (client) {
    return client;
  }

  return connectClient();
}