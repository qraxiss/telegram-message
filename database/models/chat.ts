import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({
    options: { allowMixed: 0 }
})
export class Chat {
    @prop({ required: true })
    chatId!: string
}

export const ChatModel = getModelForClass(Chat)
