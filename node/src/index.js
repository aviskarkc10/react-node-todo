import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as db from './database';

const PORT = 8848;

let app = express();

app.use(bodyParser.json());
app.use(cors());
db.connectClient();

// API Routes
app.use('/api', routes);

// Error Middlewares
// app.use(errorHandler.genericErrorHandler);
// app.use(errorHandler.notFoundError);

app.get("/", (request, response) => {
  response.json({data: "Welcome to my api"});
});

app.listen(PORT, ()=> {
  console.log(`Node app is running on port, ${PORT}`);
});
