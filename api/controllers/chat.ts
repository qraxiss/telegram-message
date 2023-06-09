import * as chat from '../../logic/models/chat'
import { ahandler } from '../../errors/handle'

export class Chat {
    @ahandler
    static async get(req: any, res: any, next: any) {
        return res.json(await chat.get(req.body))
    }

    @ahandler
    static async create(req: any, res: any, next: any) {
        return res.json(await chat.create(req.body))
    }

    @ahandler
    static async remove(req: any, res: any, next: any) {
        return res.json(await chat.remove(req.body))
    }

    @ahandler
    static async update(req: any, res: any, next: any) {
        return res.json(await chat.update(req.body))
    }
}
