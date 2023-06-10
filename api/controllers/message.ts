import * as message from '../../logic/models/message'

import { ahandler } from '../../errors/handle'

export class Message {
    @ahandler
    static async message(req: any, res: any, next: any) {
        return res.json(await message.message(req.body))
    }
}
