import { Markup, Telegraf } from 'telegraf';
import { IBotContext } from '../context/context.interface';
import { Command } from './command.class';

export class ProjectsCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }
    handle(): void {
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
        });
    }

}