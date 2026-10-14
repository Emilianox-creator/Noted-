# Noted

Noted is a lightweight note-taking app built with React and Vite. Quickly jot down an idea, give it a title, and remove notes when you are done.

## Features

- Create a note with a title, content, or both.
- View notes in a simple, clean interface.
- Delete individual notes.
- Get instant updates while developing with Vite's development server.

> **Note:** Notes are stored in React state only. They are cleared when the page is refreshed or the app is closed. I'm currently working on creating a database and add the functionality.

## Preview

Run the app locally to explore the interface and try adding and deleting notes.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Install and run

1. Clone the repository (replace `<repository-url>` with its Git URL) and change into the project directory:

   ```sh
   git clone <repository-url>
   cd Noted
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open the local address printed in the terminal (Vite uses `http://localhost:5173` by default).

## Using the app

1. Enter a title, note content, or both in the form.
2. Select the add button to create the note.
3. Select the delete button on a note to remove it.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Build the app for production into `dist/`. |
| `npm run preview` | Serve the production build locally for review. Run `npm run build` first. |
| `npm run lint` | Check the project with ESLint. |

## Project structure

```text
Noted/
├── public/
│   └── styles.css        # App styles
├── src/
│   ├── components/
│   │   ├── App.jsx        # App state and note list
│   │   ├── CreateArea.jsx # Note entry form
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Note.jsx      # Individual note display
│   └── index.jsx         # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS
