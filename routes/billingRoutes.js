const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", (req, res) => {
    stripe.charges.create({
      amount: 500,
      currency: "NZD",
      description: "1 email credit",
      source: req.body.id
    });
  });
};
