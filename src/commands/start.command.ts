import { Command } from "./command.class";
import { Telegraf, Markup } from 'telegraf';
import { IBotContext } from '../context/context.interface';

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }
    handle(): void {
        this.bot.start((ctx) => {
            console.log(ctx.session)
            ctx.replyWithHTML(`<b>Добро Пожаловать!</b> Это бот портфолио JS разработчика 👨‍💻.\nЗдесь вы сможете посмотреть проекты, а также узнать ответы на частые вопросы.`, Markup.inlineKeyboard([
                Markup.button.callback("📚 Просмотреть проекты", "projects"),
                Markup.button.url("👓 Перейти на GitHub", "https://github.com/MaximKalinchuk"),
                Markup.button.callback("🔎 Частые вопросы", "questions"),
            ], {columns: 1}))
        })

        this.bot.action("projects", (ctx) => {
            ctx.editMessageText("Описание проектов представлены на GitHub:", Markup.inlineKeyboard([
                Markup.button.url("1. RSS Агрегатор", "https://github.com/MaximKalinchuk/frontend-project-lvl3"),
                Markup.button.url("2. ToDo", "https://github.com/MaximKalinchuk/todo"),
                Markup.button.url("3. Nestjs-Backend-App", "https://github.com/MaximKalinchuk/nestjs-backend-app"),
                Markup.button.url("4. DDD-project", "https://github.com/MaximKalinchuk/ddd-project"),
                Markup.button.callback("🏠 Вернуться назад", "comeback"),
            ], {columns: 2}))
        })

        this.bot.action("comeback", (ctx) => {
            ctx.editMessageText('Добро Пожаловать! Это бот портфолио JS разработчика 👨‍💻.\nЗдесь вы сможете посмотреть проекты, а также узнать ответы на частые вопросы.', Markup.inlineKeyboard([
                Markup.button.callback("📚 Просмотреть проекты", "projects"),
                Markup.button.callback("👓 Перейти на GitHub", "git"),
                Markup.button.callback("🔎 Частые вопросы", "questions"),
            ], {columns: 1}))
        })


        this.bot.command('quit', async (ctx) => {
            await ctx.telegram.leaveChat(ctx.message.chat.id);

            await ctx.leaveChat()
        })
    }

}