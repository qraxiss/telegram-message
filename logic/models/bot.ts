import * as types from '../types'
import * as validator from '../validators/bot'

import { validate } from '../helpers/validator'

import { BotModel, Bot } from '../../database/models'

import { NotFoundError } from '../../errors/errors'

export async function create(params: any): Promise<Bot> {
    const value = validate(params, validator.createBot) as types.createBot

    const result = await BotModel.create(value)

    return result.toObject() as Bot
}

export async function get(params: any): Promise<Bot | Bot[]> {
    const value = validate(params, validator.getBot) as types.getBot

    let result: any = null

    if (value.name) {
        result = (await BotModel.findOne(value))?.toObject() as Bot
    } else {
        result = (await BotModel.find({}))?.map((item) => {
            return item.toObject() as Bot
        })
    }

    if (!result || result.length === 0) {
        throw new NotFoundError('Bot not found!')
    }

    return result
}

export async function update(params: any): Promise<boolean> {
    const value = validate(params, validator.updateBot) as types.updateBot

    const result = await BotModel.updateOne(
        {
            name: value.name
        },
        value.bot
    )

    if (result.matchedCount === 0) {
        throw new NotFoundError('Bot not found!')
    }

    return result.modifiedCount > 0
}

export async function remove(params: any): Promise<boolean> {
    const value = validate(params, validator.removeBot) as types.removeBot

    const result = await BotModel.deleteOne({ name: value.name })

    return result.deletedCount > 0
}
