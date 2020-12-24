'use strict'

// import * as uuid from 'uuid'
const uuid = require('uuid');

import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime()
  const data = JSON.parse(event.body)
  if (typeof data.title !== 'string' || typeof data.author !== 'string') {
    console.error('Validation Failed')
    callback(new Error('Couldn\'t create book.'))
    return
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      title: data.title,
      author: data.author,
      createdAt: timestamp,
      updatedAt: timestamp
    }
  }

  // write to the database
  dynamoDb.put(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error)
      callback(new Error('Couldn\'t create the item.'))
      return
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    }
    callback(null, response)
  })
}