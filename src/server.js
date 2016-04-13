import express from 'express';
import { urlencoded, json as jsonParser } from 'body-parser';

import requestHandler from './requestHandler';
import { VALIDATION_TOKEN } from './config/secrets';
import { PORT, POLICY_FILEPATH } from './config/environment';

const app = express();


/* Middleware */
app.use(urlencoded({ extended: false }));
app.use(jsonParser());

/* Policy */
app.get('/policy', (req, res) => res.sendFile(POLICY_FILEPATH));

/* Routes */
app.post('/webhook', requestHandler);

/* Webhook challenge */
app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === VALIDATION_TOKEN) {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});


/* Start listening */
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
