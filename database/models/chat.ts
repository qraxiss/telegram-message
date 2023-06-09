import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({
    options: { allowMixed: 0 }
})
export class Chat {
    @prop({ required: true })
    chatId!: string

    @prop({ unique: true })
    name?: string
}

export const ChatModel = getModelForClass(Chat)
