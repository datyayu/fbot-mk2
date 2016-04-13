import request from 'request-promise';
import generateMessage from './templateGenerators/message';
import sendMessage from './sendMessage';


export default function sendUrlContent(user, url) {
  request(url)
    .then((response) => {
      const plainTextResponse = response
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
        .replace(/<(?:.|\n)*?>/gm, '')
        .replace(/\s+/g, ' ')
        .replace(/\n+/g, '\n')
        .substring(0, 300);

      const message = generateMessage(plainTextResponse);

      sendMessage(user, message);
    })
    .catch(error => console.log(error));
}
