import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose'

import { Chat } from './chat'
import { Bot } from './bot'

@modelOptions({
    options: { allowMixed: 0 }
})
export class Route {
    @prop({ required: true, ref: Bot })
    bot!: Bot

    @prop({ required: true, ref: Chat }) // Assuming the chats property references the Chat class
    chats!: Ref<Chat>[]

    @prop({ required: true, unique: true })
    name!: string
}

export const RouteModel = getModelForClass(Route)
