import { InlineKeyboard } from "grammy";

export default async function handleHelp(ctx) {
  const menu = new InlineKeyboard()
    .webApp("Play in 1 click 🦁", "https://lionking.alphasius.com")
    .row()
    .url("Subscribe to the channel", "https://t.me/+gxr9DOSwVTpmN2E1")
    .row()
    .text("How to earn from game", "buy");

  await ctx.reply(
    `Hello! Welcome to Lion King 🦁 
In the face of a crumbling kingdom, the Lion King knew that survival meant more than just defending his land — it meant building an empire.
With strategy, strength, and an unyielding will, he embarked on a journey to reclaim his territory and unite the kingdom under his rule.
Now, it’s your turn to step into his paws, rebuild, expand, and create a legacy as the next Lion Emperor.`,
    { reply_markup: menu, parse_mode: "HTML" }
  );
}
