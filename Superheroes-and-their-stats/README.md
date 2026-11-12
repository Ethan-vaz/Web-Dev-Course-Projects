# Superheroes and Their Stats

A server-rendered web app that shows a roster of superheroes with their images and power levels, and lets you raise any hero's power level with one click.

Built with **Node.js**, **Express**, and **EJS** templates, styled with **Tailwind CSS** and **DaisyUI**.

## Features

- Server-side rendering of hero profiles (name, image, power level) with EJS
- Route parameters to look up a hero by ID (`/superhero/increase/:idOfHero`)
- Updates handled with a `POST` request, followed by a redirect back to the home page (Post/Redirect/Get pattern) so the new value shows right away and refreshing the page doesn't repeat the update
- Returns `404 Not Found` for unknown hero IDs
- Tailwind CSS + DaisyUI components (heart-masked avatars, buttons, dividers)

## Tech stack

| Layer     | Technology                 |
| --------- | -------------------------- |
| Runtime   | Node.js                    |
| Server    | Express 5                  |
| Templates | EJS                        |
| Styling   | Tailwind CSS 4, DaisyUI 5  |
| Data      | In-memory JavaScript array (`data/db.js`) |

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
cd Superheroes-and-their-stats
npm install
npm start
```

Then open <http://localhost:8080>.

## Routes

| Method | Path                            | Description                                         |
| ------ | ------------------------------- | --------------------------------------------------- |
| GET    | `/`                             | Shows all superheroes and their stats               |
| POST   | `/superhero/increase/:idOfHero` | Raises that hero's power level by 1 and redirects to `/` |

## Project structure

```
Superheroes-and-their-stats/
├── data/
│   └── db.js        # Superhero data (in-memory)
├── public/
│   └── styles.css
├── views/
│   └── home.ejs     # Home page template
├── server.js        # Express app and routes
└── package.json
```

## Notes

Data is kept in memory, so power levels reset to their starting values each time the server restarts.
