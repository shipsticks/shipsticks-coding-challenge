# ShipSticks Ruby on Rails Challenge

## Tech Stack
This project is setup with Ruby on Rails as the backend API with a MongoDB database.

The frontend setup with React and Typescript in the `app/frontend` folder using Vite as the frontend build tool.

It also comes configured with [Tailwind CSS](https://tailwindcss.com/docs) for styling, and React Query for data fetching.

The commands that Docker uses to run the app are in the `./.docker` folder, in the respective bash scripts (`docker-[rails/vite].sh`).

## Description
Review the Challenge document and fork off of this repo to complete your work.

## Installation
Please have docker installed to run app with a single command.
## Running the app
With docker installed, docker-compose up should be all you need to run the app.
```bash
# development
$ docker-compose up -d
```

This will launch three containers (the rails api app, mongodb instance, and the vite dev server) in the default local ports (3000, 27107 and 3036 respectively).

## See it in Action
Access the home page at http://localhost:3000
