
# Basic Web Server

Simple Node.js web server that responds with static message on different route.

## Features

- Route `/name` : Returns the full name.
- Route `/hobby` : Returns a list of hobbies in JSON format.
- Route `/dream` : Returns list of dreams.

## Requirements

- Node.js (v14.x or higher)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/BettyyN/Basic-Web-Server.git
   cd basic-web-server
   ```

2. Make sure you have a `data.json` file in the same directory as `index.js`.

3. Run the server locally:

   ```bash
   node index.js
   ```

   The server will be running on [http://localhost:3000](http://localhost:3000).

## Endpoints

-  GET `/name` : Returns a plain text response with name.
-  GET `/hobby` : Returns a JSON response with hobbies.
-  GET `/dream` : Returns a JSON response with dream.

## Deployment

This project is deployed on [Vercel](https://vercel.com). You can access the live version at:

- [https://basic-web-server-one.vercel.app](https://basic-web-server-one.vercel.app)
