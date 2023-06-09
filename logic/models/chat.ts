import * as types from '../types'
import * as validator from '../validators/chat'

import { validate } from '../helpers/validator'

import { ChatModel, Chat } from '../../database/models'

import { NotFoundError } from '../../errors/errors'

import { filter } from '../helpers/filter'

export async function create(params: any) {
    const value = validate(params, validator.createChat) as types.createChat

    const result = await ChatModel.create(value)

    return result.toObject() as Chat
}

export async function update(params: any) {
    const value = validate(params, validator.updateChat) as types.updateChat

    const result = await ChatModel.findOneAndUpdate(
        {
            name: value.name!
        },
        value.chat
    )

    if (!result) {
        throw new NotFoundError('Chat not found!')
    }

    return result.toObject() as Chat
}

export async function remove(params: any) {
    const value = validate(params, validator.removeChat) as types.removeChat

    const result = await ChatModel.findOneAndRemove(filter(value, ['name']))

    if (!result) {
        throw new NotFoundError('Chat not found!')
    }

    return result.toObject() as Chat
}

export async function get(params: any): Promise<Chat | Chat[]> {
    const value = validate(params, validator.getChat) as types.getChat

    let result: any = null

    if (value.name) {
        result = (await ChatModel.findOne(value))?.toObject() as Chat
    } else {
        result = (await ChatModel.find({}))?.map((item) => {
            return item.toObject() as Chat
        })
    }

    if (!result) {
        throw new NotFoundError('Chat not found!')
    }

    return result
}
