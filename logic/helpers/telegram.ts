import TelegramBot from 'node-telegram-bot-api'
import { Route, Bot, Chat } from '../../database/models'

export async function sendMessage(route: Route, message: string) {
    route.bot = route.bot as Bot
    route.chats = route.chats as Chat[]

    const bot = new TelegramBot(route.bot.token)
    return await Promise.all(
        route.chats.map(async (chat) => {
            try {
                return await bot.sendMessage(chat.chatId, message)
            } catch (e) {
                return {
                    chat: chat.chatId,
                    error: e
                }
            }
        })
    )
}
