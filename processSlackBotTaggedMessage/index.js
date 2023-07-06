const functions = require('@google-cloud/functions-framework');

functions.http('processSlackBotTaggedMessage', (req, res) => {
  const challenge = req.body.challenge;

  if (challenge) {
    const response = {
      challenge: challenge
    };

    res.status(200).json(response);
  } else {
    res.status(400).send('Invalid request');
  }
});
