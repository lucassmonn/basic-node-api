import { Router } from 'express'
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController'
import authMiddleware from './middlewares/auth';

const routes = new Router()

routes.post('/user', UserController.store)
routes.get('/user', authMiddleware, UserController.get)


routes.post('/session', SessionController.store)


export default routes;