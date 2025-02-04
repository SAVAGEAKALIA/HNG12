import express from 'express'
import AppController from '../Controllers/AppController'

const router = express.Router();

router.get('/', AppController.getDetails)
router.get('/details', AppController.getDetails)
router.get('/api/classify-number', AppController.getNumber)

export default router
