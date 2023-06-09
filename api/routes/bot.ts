import { Router } from 'express'

//Require controllers
import { Bot } from '../controllers/bot'
//Initilaziation
const router = Router()

//Routes
router.get('/', Bot.get)
router.post('/', Bot.create)
router.patch('/', Bot.update)
router.delete('/', Bot.remove)

export { router }
