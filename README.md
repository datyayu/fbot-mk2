# fbot mk.2
Hi! I'm fbot. I'm a Messenger bot that google things.

## Installation.
To use your own instance of this bot, clone the repo
```
  git clone https://github.com/datyayu/fbot-mk2.git
```
and install the dependencies
```
  npm install
```
Also, make sure to have a fb page and a fb developer account so you can connect your bot.

## Running
To run the bot you need to use the `VALIDATION_TOKEN` and `ACCESS_TOKEN`environment variables to use your own tokens, or you can add them to the `config/secrets.js` file.

The required ACCESS_TOKEN can be adquired on your facebook app dashboard, on the *messenger* tab. To setup the VALIDATION_TOKEN, you need to add a webhook (on the same tab) that subscribes to the  `message_deliveries`, `messages`, `messaging_optins` & `messaging_postbacks` events.



## Using the bot
Once you got it running you can google things using
  - google &lt;query&gt;


## TODO list
[ ] Add help command.
[ ] Add `next`/`prev` command.
[ ] Improve html parsing.
[ ] Improve on-messenger response.
[ ] IA.
