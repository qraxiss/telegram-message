import * as types from '../types'
import * as validator from '../validators/route'
import { validate } from '../helpers/validator'
import { RouteModel, ChatModel, BotModel, Route, Bot, Chat } from '../../database/models'

import { Ref } from '@typegoose/typegoose'

import { NotFoundError } from '../../errors/errors'

import { filter } from '../helpers/filter'

export async function createRoute(params: any): Promise<Route> {
    const value = validate(params, validator.createRoute) as types.createRoute

    const result = await RouteModel.create(value)

    return result.toObject() as Route
}

export async function getRoute(params: any): Promise<Route[]> {
    const value = validate(params, validator.getRoute) as types.getRoute
    let result: any = null

    result = await Promise.all(
        (
            await RouteModel.find(value)
        )?.map(async (item) => {
            item = item.toObject()
            item.bot = (await BotModel.findById(item.bot)) as Bot
            item.chats = (await ChatModel.find({ _id: { $in: item.chats } })) as Chat[]
            return item
        })
    )

    if (result.length === 0) {
        throw new NotFoundError('Route not found!')
    }

    return result
}

export async function removeRoute(params: any): Promise<boolean> {
    const value = validate(params, validator.removeRoute) as types.removeRoute

    const result = await RouteModel.deleteOne(value)

    return result.deletedCount > 0
}

export async function updateRoute(params: any): Promise<boolean> {
    const value = validate(params, validator.updateRoute) as types.updateRoute

    const result = await RouteModel.updateOne(
        {
            name: value.name
        },
        filter(value, ['name'])
    )

    if (!result) {
        throw new NotFoundError('Route not found!')
    }

    return result.modifiedCount > 0
}

export async function appendChat(params: any): Promise<boolean> {
    const value = validate(params, validator.appendChat) as types.appendChat

    //insert chat to route.chats
    const result = await RouteModel.updateOne({ name: value.name }, { $addToSet: { chats: value.chat } })

    if (result.matchedCount === 0) {
        throw new NotFoundError('Route not found!')
    }
    return result.modifiedCount > 0
}

export async function deleteChat(params: any): Promise<boolean> {
    const value = validate(params, validator.deleteChat) as types.deleteChat

    //delete chat from route.chats
    const result = await RouteModel.updateOne({ name: value.name }, { $pull: { chats: value.chat } })

    if (result.matchedCount === 0) {
        throw new NotFoundError('Route not found!')
    }
    return result.modifiedCount > 0
}
