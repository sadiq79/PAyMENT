const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, srtipeRes) => {
    if(stripeErr) {
        res.status(500).send({error: stripeErr})
    }
    else {
        res.status(200).send({ success: srtipeRes })
    }
}

const paymentApi = app => {
    app.get('/', (req, res) => {
        res.send({ message: "Hello Stripe Checkout server", timestamp: new Date().toISOString() })
    });

    app.post('/', (req, res) =>{
        stripe.charges.create(req.body, postStripeCharge(res));
    });

    return app;
};

module.exports = paymentApi;