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
            ctx.reply('Вам понравился курс?', Markup.inlineKeyboard([
                Markup.button.callback("❤", "course_like"),
                Markup.button.callback("🤢", "course_dislike")
            ]))
        })
        this.bot.action("course_like", (ctx) => {
            ctx.session.like = true;
            ctx.editMessageText("😎 Спасибо за оценку!")
        })
                this.bot.action("course_dislike", (ctx) => {
            ctx.session.like = false;
            ctx.editMessageText("👺 Спасибо за оценку!")
        })
    }

}