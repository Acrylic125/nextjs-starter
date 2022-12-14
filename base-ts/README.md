# NextJS Starter - Base TS

This project is to help kickstart your next project with NextJS.

As a start, this project is a bare bones shopping app to demonstrate how to use NextJS. Refer to the "Getting Started" section to get started.

## Main Libraries and Frameworks

- NextJS as a backend framework for React.
- MySQL as a database.
- Auth0 for authentication.
- TailwindCSS for styling.
- React Query for data fetching.

## Getting Started

1. Clone the repo
1. Run `npm install` to install dependencies.
1. COPY and name `sample.env.local` to `.env.local` and update the values to match your environment.
1. Run `npm run dev` to start the development server.
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
1. To try out the endpoints on postman, refer to https://github.com/Acrylic125/nextjs-starter/wiki/Auth0-Postman-Setup-Guide to setup postman.

## Removing Starter Code

As mentioned above, this project is a bare bones shopping app to demonstrate how to use NextJS. To remove the starter code, follow these steps:

1. Delete the `shop.sql` file.
1. Delete the `services/products.ts` file.
1. Delete the `controllers/products.ts` file.
1. Delete the `api/products-api.ts` file.
1. Delete the `pages/api/products.ts` file.

## Deployment

1. Run `npm run build` to build the project.
1. Run `npm run start` to start the production server.
