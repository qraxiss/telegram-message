import { Router } from 'express'

//Require controllers
import { Chat } from '../controllers/chat'
//Initilaziation
const router = Router()

//Routes
router.get('/', Chat.get)
router.post('/', Chat.create)
router.patch('/', Chat.update)
router.delete('/', Chat.remove)

export { router }
