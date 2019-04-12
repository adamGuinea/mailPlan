## MailPlan

#### Demo : https://mailplan.herokuapp.com/

###### Improve churn rates by gaining important customer insights.

---

## Description

Create Surveys and send them to multiple email addresses.

MailPlan uses SendGrid to create emails and Stripe to mock payments which are required to purchase credits. These credits are used to create surveys.

## Instructions

- Login using Google OAuth.
- Requires users to maintain a credit balance. Add Credits upon login on the Credits page.
- Click on the red + icon on the bottom right side of the screen to create a new Survey.
- Fill out the Survey Form and send to the desired email addresses.
- The email recipients can respond to the request in the survey through a Yes/No option from the email.
- Users can view their responses and gain insight into customer satisfaction.

## Tech Stack

#### Server

- Built with Express and MongoDB.
- body-parser and passport.js help manage authentication and provide validation before persisting to the database.
- MailPlan uses SendGrid to send emails to customers. The API allows emails to be sent to multiple email addresses and allows reply functionality once a customer clicks the Yes/No option. This is useful for tracking Surveys. Users can not only send Surveys but also track the responses they have received on a given Survey. For example if a user sends a Survey to 100 people to which 60 replied as Yes and 40 as No, the user is able to view this information on their survey list page.
- MailPlan uses Stripe to mock payments, no real payments are accepted. Use test credit card number 4242 4242 4242 4242 on the modal. Once a user has enough credits they can start sending surveys. Each survey costs 1 credit.
- Authentication is supported by Passport.JS and uses the following strategy
  - Passport Google OAuth 2.0 : [View Documentation](http://www.passportjs.org/packages/passport-google-oauth20/ "passport-google-oauth20")

#### Client

- React.JS.
- Redux for state management and tracking of authenticated users, including their created surveys.
- Uses Layout components to display public and private content depending upon user authentication state.
- Materialize.CSS for a simplistic and responsive view.

#### Technologies:

- React.JS
- Express
- Redux
- Mongo DB
- Stripe
- SendGrid API
- Axios
- Font Awesome
- Hosted on Heroku
- Google OAuth
- Materialize CSS
- Prod and Dev environments with http-proxy-middleware, helped to get around the CORS issues which bamboozled me a bit while building my online store
