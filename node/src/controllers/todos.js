import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todos';

var router = Router();

router.get('/', (req, res, next) => {
	todoService.getAllTasks()
		.then((response) => {
			let data = todoService.buildTasks(response);

			res.json({
				data: data
			});
		}).catch(error => next(error));
});

router.post('/', (req, res, next) => {
	todoService.createTask(req.body)
		.then((response) => {
			res.json({
				data: response
			});
		}).catch(error => next(error));
});

router.put('/', (req, res, next) => {
	todoService.updateTask(req.body)
		.then(response => {
			res.json({
				data: response
			});
		}).catch(error => next(error));
});

export default router;

