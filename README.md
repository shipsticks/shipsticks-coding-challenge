# ShipSticks Ruby on Rails Challenge

## Description
Review the Challenge document and fork off of this repo to complete your work.

## Tech Stack

This project uses Ruby on Rails as the backend API with a MongoDB database.

The frontend is built with React and TypeScript, located in the `app/frontend` folder, using [Vite Ruby](https://vite-ruby.netlify.app/guide/introduction.html) as the build tool. It is also configured with [Tailwind CSS](https://tailwindcss.com/docs) for styling and React Query for data fetching.

The commands to run the app with Docker are located in the `./.docker` folder, within the respective bash scripts (`docker-rails.sh` and `docker-vite.sh`), which can also be ran locally. These scripts will launch three containers: the Rails API app, the MongoDB instance, and the Vite dev server, running on the default local ports (3000, 27017, and 3036 respectively).

## Installation
Please have docker installed to run app with a single command.

## Running the app
With docker installed, docker-compose up should be all you need to run the app.
```bash
# development
$ docker-compose up -d
```

## See it in Action
Access the home page at http://localhost:3000
