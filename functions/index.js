
const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(
  "sk_test_51MLikDLSypmNtsLPtIJuDmTt2l53hMMoCgVN1rskvgBCvwFFiiREf7NJsPKg2s98mzoqdwEcq7I0SYmT4PUb49mx00FOr9CijH"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


