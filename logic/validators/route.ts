import * as Joi from 'joi'

import { joiObjectId } from 'ts-joi-objectid'
const objectId = joiObjectId(Joi)

export const createRoute = Joi.object({
    name: Joi.string().required(),
    bot: objectId().required(),
    chats: Joi.array().items(objectId()).required()
})

export const removeRoute = Joi.object({
    name: Joi.string().required()
})

export const getRoute = Joi.object({
    name: Joi.string()
})

export const updateRoute = Joi.object({
    name: Joi.string().required(),
    route: Joi.object({
        name: Joi.string(),
        bot: objectId()
    })
        .required()
        .or('name', 'bot')
})

export const appendChat = Joi.object({
    name: Joi.string().required(),
    chat: objectId().required()
})

export const deleteChat = Joi.object({
    name: Joi.string().required(),
    chat: objectId().required()
})
