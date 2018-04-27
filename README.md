# LastTweetTonight

![alt LastTweetTonight](https://image.ibb.co/exthgx/Last_Tweet_Tonight.gif)

## Table of Contents

1. [About](#about)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Set Environmental Variables](#set-environmental-variables)
    1. [Start Development](#start-development)
1. [Application Flow](#application-flow)

## About

Last Tweet Tonight –– a **unique** application for true fans of John Oliver. Have you ever felt like a twitter account alone is not enough for John Oliver? And he deserves more than that – like, say, a separate app? Well, good news! There is now an app that lets you see John Oliver's tweets and not get distracted by all the unnecessary functionality of the popular app. 
**Here's some information on how to use it.**

## Requirements

- Node 9.2.x
- React 16.3.x
- npm 5.6.x

## Development

1. For the from cygnusss/LastTweetTonight on github
2. Clone down your fork
  ```sh
    git clone https://github.com/<username>/LastTweetTonight
  ```
3. Move into the repo after it's been cloned onto your machine by typing the following command:
  ```sh
    cd LastTweetTonight 
  ```
4. Install the dependencies:
  ```sh
    npm install
  ```
## Set Environmental Variables

1. Create a .env file and open it
2. Put in your twitter app (https://apps.twitter.com/) secret information:
  ```sh
    CONSUMER_KEY='YOUR_KEY'
    CONSUMER_SECRET='YOUR_SECRET'
    ACCESS_TOKEN='YOUR_TOKEN'
    ACCESS_TOKEN_SECRET='YOUR_TOKEN_SECRET'
  ```
3. Save the file and exist
  
## Start Development

Run the following command to start the local server:
  ```sh
    npm run server-dev
  ```
Run the following command to build bundle.js:
  ```sh
    npm run react
  ```
## Application Flow

![alt AppFlow](https://image.ibb.co/cfKcWx/Screen_Shot_2018_04_26_at_2_35_25_AM.png)
