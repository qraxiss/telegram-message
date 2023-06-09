import * as Joi from 'joi'

export const createChat = Joi.object({
    name: Joi.string(),
    chatId: Joi.string().required()
})

export const deleteChat = Joi.object({
    name: Joi.string(),
    chatId: Joi.string()
})

export const updateChat = Joi.object({
    name: Joi.string(),
    chatId: Joi.string(),

    newName: Joi.string(),
    newChatId: Joi.string()
})
    .nand('name', 'chatId')
    .nand('newName', 'newChatId')

export const getChat = Joi.object({
    name: Joi.string(),
    chatId: Joi.string()
}).nand('chatId', 'name')
