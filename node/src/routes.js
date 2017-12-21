import { Router } from 'express';
import todoController from './controllers/todos';
import database from './database';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

/**
 * Contains all API routes for the application.
 */
let router = Router();

router.get('/', (req, res) => {
	res.json({
		text: 'Hello world'
	});
});

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/api/v1', router);
router.use('/todos', todoController);

export default router;