import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({
    options: { allowMixed: 0 }
})
export class Bot {
    @prop({ required: true })
    token!: string

    @prop({ required: true, unique: true })
    name!: string
}

export const BotModel = getModelForClass(Bot)
