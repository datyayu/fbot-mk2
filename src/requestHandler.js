import googleSearch from 'google';
import promisify from 'es6-promisify';

import generateMessage from './templateGenerators/message';
import generateGeneric from './templateGenerators/generic';
import sendMessage from './sendMessage';
import sendUrlContent from './sendUrlContent';
const google = promisify(googleSearch);


export default function requestHandler(req, res) {
  const messagingEvents = req.body.entry[0].messaging;

  for (const event of messagingEvents) {
    if ((!event.message || !event.message.text) && !event.postback) continue;

    const sender = event.sender.id;

    if (event.postback) {
      const url = event.postback.payload;

      sendUrlContent(sender, url);

      continue;
    }

    const text = event.message.text.toLowerCase();
    console.log(`Message received from ${sender}: ${text}`);

    if (/^google/.test(text)) {
      const query = text.replace(/^google/, '');

      google(query)
        .then(results => {
          const messageData = generateGeneric(results.links);
          sendMessage(sender, messageData);
        })
        .catch(error => console.log(error));

      continue;
    }

    const messageData = generateMessage('I don\'t understand, sorry :(');
    sendMessage(sender, messageData);
  }

  res.sendStatus(200);
}
