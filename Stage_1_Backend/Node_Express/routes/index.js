import express from 'express'
import AppController from '../Controllers/AppController.js'

const routes = express.Router();

routes.get('/', AppController.getDetails)
routes.get('/details', AppController.getDetails)
routes.get('/api/classify-number', AppController.getNumber)

export default routes
