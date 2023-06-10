import { Router } from 'express'
import { Route } from '../controllers/route'

const router = Router()
router.get('/', Route.get)
router.post('/', Route.create)
router.patch('/', Route.update)
router.delete('/', Route.remove)

const chatRouter = Router()
chatRouter.post('/', Route.appendChat)
chatRouter.delete('/', Route.deleteChat)

router.use('/chat', chatRouter)

export { router }
