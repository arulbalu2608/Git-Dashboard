# Git Dashboard

## Overview

This project is a Git Statistics Dashboard that allows users to search for GitHub users and view their respective statistics. The dashboard includes information such as user details, repository information

## Features

- Search for GitHub users.
- View detailed statistics for users, including contributions, followers, and repositories.
- View detailed statistics for repositories, including stars, forks, and commits.
- Modern and trending UI/UX design.

## Tech Stack

- React.js
- Bootstrap
- GitHub GraphQL API


## Getting Started

 Follow these steps to set up your getting started:

   git clone https://github.com/your-username/git-statistics.git
   cd git-statistics
   npm install
   npm install

## Setting up Environment Variables

To keep sensitive information like API keys and base URLs secure, we use environment variables stored in a file named `.env`. Follow these steps to set up your environment variables:

1. Create a file named `.env` in the root of your project.

2. Add the following lines to your `.env` file

 REACT_APP_GITHUB_API_URL=https://api.github.com/graphql
 REACT_APP_GITHUB_TOKEN ="YOUR_GITHUB_TOKEN"




