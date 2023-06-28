const functions = require('@google-cloud/functions-framework');

functions.http('helloHttp', (req, res) => {
  const payload = req.body;
  console.log(payload)
  res.status(200).send('Success');
});