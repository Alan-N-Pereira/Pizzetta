# Pizzetta

The Pizzetta is an online web app built for ordering pizza online. The Pizzetta application was built using Next.js, MongoDB & Redux. The Application contains homepage, ordering page and cart page. There are four different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

## Getting Started

To run the site on you local machine

-   Fork or Clone this repository in your local machine.
-   Cd into the directory and run `npm install` to download all the required packages.
-   Then run `npm start` inside the terminal (To start the appllication on browser).
-   Create a Firebase account and start a new Project (To store all the series and flims data as well as user data).
-   Copy your Firebase project config form the "project setting" of the project (which contains the api key etc.) and paste it  under the config in "./src/lib/firebase.prod.js" (Now the application is connected to firebase but there is no data in it).
-   To "Seed" the data into the FireStore Database uncomment the code (Tagged as uncomment to seed) in 'firebase.prod.js' and refresh the app in browser `once` to seed the data in the database.
-   Refresh only once and comment the code again to avoid multiple instances of same data written into the database.
    -   If this occurs delete the collection in database and redo the seeding from step 6.
-   To create a user just `signup` form the app. (This will create a new user). 

## Info

-   The Netflix Clone is a React application inspired from the real Netflix site, which uses React with router and custom hooks on Client side and Firebase in the backend.
-   The project was an effort to recreate the original Netfix site with similar features using React.
-   The Application contains almost similar design and features of the original Netflix site.
-   The site is Bootstraped using create-react-app.
-   Firebase is used in backend to store Data.
-   The project uses Styled components which allows you to write css in javascript to design the site.
-   In order to write a new blog post, the user has to register and login.

## Potential Improvements

-   A better way to seed the data in Firebase.
-   Better Optimization of certain parts of component.

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

-   [Next.js](https://nextjs.org/): Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.
-   [MongoDB](https://www.mongodb.com/): MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
-   [react-paypal-api]: an api to integerate paypal payment in the app.