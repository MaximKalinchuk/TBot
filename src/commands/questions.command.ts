import { Markup, Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";

export class QuestionCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }
    
        handle(): void {
        this.bot.action("questions", async (ctx) => {
            await ctx.editMessageText("Частрые вопросы, ответ на которые вы сможете найти ниже 👇", Markup.inlineKeyboard([
                Markup.button.callback("Сколько по времени заняло обучение?", "question1"),
                Markup.button.callback("Где ты учился?", "question2"),
                Markup.button.callback("🏠 Вернуться назад", "comeback"),
            ], {columns: 1}))
        })

                this.bot.action("question1", async (ctx) => {
            await ctx.editMessageText("1 годик", Markup.inlineKeyboard([
                Markup.button.callback("🏠 Вернуться назад", "comeback"),
            ], {columns: 1}))
        })

        this.bot.action("question2", async (ctx) => {
            await ctx.editMessageText("Курсы Hexlet", Markup.inlineKeyboard([
                Markup.button.callback("🏠 Вернуться назад", "comeback"),
            ], {columns: 1}))
        })
    }
}