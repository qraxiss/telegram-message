import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose'

import { Chat } from './chat'
import { Bot } from './bot'

@modelOptions({
    options: { allowMixed: 0 }
})
export class Route {
    @prop({ required: true, ref: Bot })
    bot!: Ref<Bot> | Bot

    @prop({ required: true, ref: () => Chat })
    public chats!: Ref<Chat>[] | Chat[] // unique

    @prop({ required: true, unique: true })
    name!: string
}

export const RouteModel = getModelForClass(Route)
