import * as Joi from 'joi'

export const createBot = Joi.object({
    name: Joi.string().required(),
    token: Joi.string().required()
})

export const removeBot = Joi.object({
    name: Joi.string().required()
})

export const getBot = Joi.object({
    name: Joi.string()
})

export const updateBot = Joi.object({
    name: Joi.string().required(),
    bot: Joi.object({
        name: Joi.string(),
        token: Joi.string()
    })
        .or('name', 'token')
        .required()
})
