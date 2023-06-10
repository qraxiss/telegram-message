import * as route from '../../logic/models/route'
import { ahandler } from '../../errors/handle'

export class Route {
    @ahandler
    static async get(req: any, res: any, next: any) {
        return res.json(await route.getRoute(req.body))
    }

    @ahandler
    static async create(req: any, res: any, next: any) {
        return res.json(await route.createRoute(req.body))
    }

    @ahandler
    static async remove(req: any, res: any, next: any) {
        return res.json(await route.removeRoute(req.body))
    }

    @ahandler
    static async update(req: any, res: any, next: any) {
        return res.json(await route.updateRoute(req.body))
    }

    @ahandler
    static async appendChat(req: any, res: any, next: any) {
        return res.json(await route.appendChat(req.body))
    }

    @ahandler
    static async deleteChat(req: any, res: any, next: any) {
        return res.json(await route.deleteChat(req.body))
    }
}
