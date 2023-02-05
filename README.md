# Pizzetta

Pizzetta is an e-commerce website for ordering pizza online, built using Next.js and Redux in the back-end and MongoDB as the database. Implemented features including a homepage, ordering page, and cart page, allowing users to view product information, add items to their cart, and make payments using the PayPal API. 

## Getting Started

To run the site on you local machine

-   Fork or Clone this repository in your local machine.
-   Cd into the directory and run `npm install` to download all the required packages.
-   Then run `npm start` inside the terminal (To start the appllication on browser).
-   Create a .env file in the server directory and store the following:
MONGO_URL=Insert the correct connection URL for your MongoDB database (You can get this URL in connect after creating a cluster on MongoDB Atlas)
-   Create a `USERNAME` and `PASSWORD` variable with value to create a admin to add or delete new products.
-   To setup payment you need to create a paypal account and get the api.

## Info

-   Built the front-end of the website using Next.js, a React-based framework
-   Designed and implemented the back-end architecture using Redux, a state management library
-   Utilized MongoDB to store and retrieve website data
-   Integrated PayPal API for payment processing
-   Developed an admin panel for adding new products to the menu
-   Ensured the website was responsive and accessible for all users a seamless user experience

## Potential Improvements

-   Improvenment in UI design.
-   Better Optimization of certain parts of component.

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

-   [Next.js](https://nextjs.org/): Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.
-   [MongoDB](https://www.mongodb.com/): MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
-   [react-paypal-api]: an api to integerate paypal payment in the app.
