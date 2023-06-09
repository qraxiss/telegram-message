import * as Joi from 'joi'

export const createChat = Joi.object({
    name: Joi.string(),
    chatId: Joi.string().required()
})

export const removeChat = Joi.object({
    name: Joi.string(),
    chatId: Joi.string()
})

export const updateChat = Joi.object({
    name: Joi.string(),
    chatId: Joi.string(),
    chat: Joi.object({
        name: Joi.string(),
        chatId: Joi.string()
    })
        .or('name', 'chatId')
        .required()
}).nand('chatId', 'name')

export const getChat = Joi.object({
    name: Joi.string(),
    chatId: Joi.string()
}).nand('chatId', 'name')
