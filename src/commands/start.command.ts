import { Command } from "./command.class";
import { Telegraf, Markup } from 'telegraf';
import { IBotContext } from '../context/context.interface';

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }
    handle(): void {
        this.bot.start( async (ctx) => {
            await ctx.replyWithHTML(`<b>Добро Пожаловать!</b> Это бот портфолио JS разработчика 👨‍💻.\nЗдесь вы сможете посмотреть проекты, а также узнать ответы на частые вопросы.`, Markup.inlineKeyboard([
                Markup.button.callback("📚 Просмотреть проекты", "projects"),
                Markup.button.url("👓 Перейти на GitHub", "https://github.com/MaximKalinchuk"),
                Markup.button.callback("🔎 Частые вопросы", "questions"),
            ], {columns: 1}))
        })

        this.bot.action("projects", async (ctx) => {
            await ctx.editMessageText("Список проектов:", Markup.inlineKeyboard([
                Markup.button.callback("1. RSS Агрегатор", "project1"),
                Markup.button.callback("2. ToDo", "project2"),
                Markup.button.callback("3. Nestjs-Backend-App", "project3"),
                Markup.button.callback("4. DDD-project", "project4"),
                Markup.button.callback("🏠 Вернуться назад", "comeback"),
            ], {columns: 2}))
        })

        this.bot.action("comeback", async (ctx) => {
            await ctx.editMessageText('Добро Пожаловать! Это бот портфолио JS разработчика 👨‍💻.\nЗдесь вы сможете посмотреть проекты, а также узнать ответы на частые вопросы.', Markup.inlineKeyboard([
                Markup.button.callback("📚 Просмотреть проекты", "projects"),
                Markup.button.url("👓 Перейти на GitHub", "https://github.com/MaximKalinchuk"),
                Markup.button.callback("🔎 Частые вопросы", "questions"),
            ], {columns: 1}))
        })

    }

}