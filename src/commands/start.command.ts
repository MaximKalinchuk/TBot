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

        this.bot.action("questions", async (ctx) => {
            await ctx.editMessageText("Частрые вопросы, ответ на которые вы сможете найти ниже 👇", Markup.inlineKeyboard([
                Markup.button.callback("Сколько по времени заняло обучение?", "question1"),
                Markup.button.callback("Где ты учился?", "question2"),
                Markup.button.callback("🏠 Вернуться назад", "comeback"),
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

        this.bot.action("project1", async (ctx) => {
            await ctx.editMessageText(`RSS Агрегатор:\nСпециализированный формат, предназначенный для описания лент новостей, анонсов статей и других материалов. Для этого используются специальные сервисы, называемые RSS-агрегаторами.`,
            Markup.inlineKeyboard([
                Markup.button.url("👓 Перейти на GitHub", "https://github.com/MaximKalinchuk/frontend-project-lvl3"),
                Markup.button.callback("🏠 Вернуться назад", "projects")
            ], {columns: 1}))
        })

        this.bot.action("project2", async (ctx) => {
            await ctx.editMessageText(`ToDo:\nПриложение сделано с целью показать работодателю базовые навыки владения такими технологиями, как React, React Hooks и в дальнейшем Redux. Приложение формирует список ваших задач. Состояние сохраняется в LocalStorage.`,
            Markup.inlineKeyboard([
                Markup.button.url("👓 Перейти на GitHub", "https://github.com/MaximKalinchuk/todo"),
                Markup.button.callback("🏠 Вернуться назад", "projects")
            ], {columns: 1}))
        })

        this.bot.action("project3", async (ctx) => {
            await ctx.editMessageText(`Nestjs-Backend-App:\nПример Backend приложения, написанного с использованием технологий: NestJs, Postgres, TS. Также реализована авторизация с access и refresh токенами.`,
            Markup.inlineKeyboard([
                Markup.button.url("👓 Перейти на GitHub", "https://github.com/MaximKalinchuk/nestjs-backend-app"),
                Markup.button.callback("🏠 Вернуться назад", "projects")
            ], {columns: 1}))
        })

        this.bot.action("project4", async (ctx) => {
            await ctx.editMessageText(`DDD-project:\nПример Backend приложения, написанного с использованием технологий: NestJs, Postgres, TS по DDD архитектуре.`,
            Markup.inlineKeyboard([
                Markup.button.url("👓 Перейти на GitHub", "https://github.com/MaximKalinchuk/ddd-project"),
                Markup.button.callback("🏠 Вернуться назад", "projects")
            ], {columns: 1}))
        })

        this.bot.action("comeback", async (ctx) => {
            await ctx.editMessageText('Добро Пожаловать! Это бот портфолио JS разработчика 👨‍💻.\nЗдесь вы сможете посмотреть проекты, а также узнать ответы на частые вопросы.', Markup.inlineKeyboard([
                Markup.button.callback("📚 Просмотреть проекты", "projects"),
                Markup.button.url("👓 Перейти на GitHub", "https://github.com/MaximKalinchuk"),
                Markup.button.callback("🔎 Частые вопросы", "questions"),
            ], {columns: 1}))
        })


        // this.bot.command('quit', async (ctx) => {
        //     await ctx.telegram.leaveChat(ctx.message.chat.id);

        //     await ctx.leaveChat()
        // })
    }

}