import Joi from 'joi'

export const message = Joi.object({
    route: Joi.string().required(),
    message: Joi.string().required()
})
