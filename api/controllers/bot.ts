import * as bot from '../../logic/models/bot'
import { ahandler } from '../../errors/handle'

export class Bot {
    @ahandler
    static async get(req: any, res: any, next: any) {
        return res.json(await bot.get(req.body))
    }

    @ahandler
    static async create(req: any, res: any, next: any) {
        return res.json(await bot.create(req.body))
    }

    @ahandler
    static async remove(req: any, res: any, next: any) {
        return res.json(await bot.remove(req.body))
    }

    @ahandler
    static async update(req: any, res: any, next: any) {
        return res.json(await bot.update(req.body))
    }
}
