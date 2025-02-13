import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api/accounts', router);
    router.post('/', indexController.createAccount.bind(indexController));
    router.get('/:id', indexController.getAccount.bind(indexController));
    router.post('/transfer', indexController.transferFunds.bind(indexController));
}