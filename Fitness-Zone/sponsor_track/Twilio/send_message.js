TWILIO_ACCOUNT_SID = '###'
TWILIO_AUTH_TOKEN = '###'
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'User report', from: '###', to: '###'})
      .then(message => console.log(message.sid));
