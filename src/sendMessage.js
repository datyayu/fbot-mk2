import request from 'request-promise';
import { ACCESS_TOKEN } from './config/secrets';


export default function sendMessage(id, messageData) {
  const configData = {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: ACCESS_TOKEN },
    method: 'POST',
    json: {
      recipient: { id },
      message: messageData,
    },
  };

  request(configData)
    .then(response => {
      if (response.body.error) console.log(response.body.error);
    })
    .catch(error => console.log(error));
}
