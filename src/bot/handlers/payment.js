import { InlineKeyboard } from "grammy";

export async function startPaymentProcess(conversation, ctx) {
  // Remove the loading clock
  await ctx.answerCallbackQuery();

  const menu = new InlineKeyboard()
    .webApp("Play in 1 click", "https://lionking.alphasius.com")
    .row()
    .url("Subscribe to the channel", "https://t.me/+gxr9DOSwVTpmN2E1")

  await ctx.reply(
    `How to play Lion King ⚡️

Full version of the guide. 

💰 Tap to earn
Tap the screen and collect coins.

⛏ Mine
Upgrade cards that will give you passive income opportunities.

⏰ Profit per hour
The exchange will work for you on its own, even when you are not in the game for 3 hours.
Then you need to log in to the game again.

📈 LVL
The more coins you have on your balance, the higher the level of your exchange is and the faster you can earn more coins.

👥 Friends
Invite your friends and you’ll get bonuses. Help a friend move to the next leagues and you'll get even more bonuses.

🪙 Token listing
At the end of the season, a token will be released and distributed among the players.
Dates will be announced in our announcement channel. Stay tuned!

/help to get this guide`,
    { reply_markup: menu, parse_mode: "HTML" }
  );
}

