# Flyreel Book Library

Book library for Flyreel challenge

## Prerequisites

Node, Typescript, Serverless

Install the Serverless Framework via

`npm install -g serverless`

Serverless must be configured with your AWS account in order to deploy

## Compiling

You can compile the ts files in this directory by first installing typescript via

`npm install -g typescript`

then

`npm i`

You can then run the compiler by running `tsc` in this directory. It will pull the settings from .tsconfig and extra @types
from package.json. The output create.js file is what will be uploaded by serverless.

## Deployment

After configuring Serverless locally and compiling your TypeScript files, you can deploy to your AWS account via

`sls deploy`

## Usage

You can create and retrieve books with the following commands:

### Create a book

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/books --data '{ "title": "Book Title", "author": "My Favorite Author" }'
```

### List all books

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/books
```

### Get a specific book

```bash
# Replace the <id> part with a real id from your book table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/books/<id>
```
