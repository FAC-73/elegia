# LookBook - Google Search Books App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />

React-based Google Books Search app
<br />

Launch application [Heroku Deployment](https://protected-retreat-51011.herokuapp.com/)
<br />

## Table of Contents
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)


![Book Search App](https://github.com/FAC-73/elegia/blob/main/src/assets/homepage1.png?raw=true)
<br />

## Requirements

- [x] This application requires at minimum 2 pages:

- [x] [Search](Search.png) - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

- [x] Saved](Saved.png) - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

- [x] Start by using the [01-Ins_Mern/create-react-express](../01-Activities/01-Ins_Mern/create-react-express) example as a base for your application.

- [x] Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.

- [x] Using mongoose, then create a Book schema.

- [x] At a minimum, books should have each of the following fields:

- [x] `title` - Title of the book from the Google Books API

- [x] `authors` - The books's author(s) as returned from the Google Books API

- [x] `description` - The book's description as returned from the Google Books API

- [x] `image` - The Book's thumbnail image as returned from the Google Books API

- [x] `link` - The Book's information link as returned from the Google Books API

- [x] Creating `documents` in your `books` collection similar to the following:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

- [x] This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

- [x] The layout should include at least two React Components for each page `Search` and `Saved`.

- [x] Add the following Express routes for your app:

- [x] `/api/books` (get) - Should return all saved books as JSON.

- [x] `/api/books` (post) - Will be used to save a new book to the database.

- [x] `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

- [x] `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

- [x] Deploy your application to Heroku once complete. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

## Installation
Clone the repo to your local development environment.

```md
git clone https://github.com/FAC-73/elegia.git
```
Navigate to the elegia folder directory using the command prompt.

Run `npm install` to install all dependencies. in terminal or bash
<br><br>
Run `npm start` to run the application in terminal or bash
<br><br>
Use http://localhost:3000 [or whatever terminal port you have specified] in your browser

## Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />

## Contributing
[Kay Davis](https://github.com/FAC-73)
<br />

## Built with
- [React](https://reactjs.org/)
- [Javascript](https://www.w3schools.com/jsref/default.asp)
- [Node.js](https://nodejs.org/en/)
- [axios](https://www.npmjs.com/package/axios)
- [Mongoose](https://mongoosejs.com/)
- [Heroku](https://www.heroku.com)
- [MongoDB](https://www.mongodb.com/)

## Questions?

### GitHub Username:
[FAC-73](https://github.com/FAC-73)

###  ✉️ Email me:
[kaydavis21@googlemail.com](mailto:kaydavis21@googlemail.com)

### 📁 GitHub project repo:
[https://github.com/FAC-73/elegia](https://github.com/FAC-73/elegia)
