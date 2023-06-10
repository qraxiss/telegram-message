import { Router } from 'express'
import { Message } from '../controllers/message'

const router = Router()

router.post('/', Message.message)

export { router }
