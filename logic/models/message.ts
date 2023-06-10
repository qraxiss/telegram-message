import { sendMessage } from '../helpers/telegram'
import { getRoute } from './route'
import * as types from '../types'
import * as validator from '../validators/message'
import { validate } from '../helpers/validator'

export async function message(params: any) {
    const value = validate(params, validator.message) as types.message

    const route = (await getRoute({ name: value.route }))[0]

    return await sendMessage(route, value.message)
}
