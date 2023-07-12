const functions = require('@google-cloud/functions-framework');

functions.http('processSlackBotTaggedMessage', (req, res) => {
  const payload = req.body;
  console.log(payload)
  const challenge = payload.challenge;

  res.status(200).send(challenge);
});
