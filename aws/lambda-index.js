const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  console.log("... Receive Event");
  console.log(event);
  // The body field of the event in a proxy integration is a raw string.
  // In order to extract meaningful values, we need to first parse this string
  // into an object. A more robust implementation might inspect the Content-Type
  // header first and use a different parsing strategy based on that value.
  if (!event.body) {
    errorResponse('No body found', context.awsRequestId, callback)
  };

  const requestBody = JSON.parse(event.body);

  const action = requestBody.action;
  let actionPromise;

  if (action === 'scan') {
    actionPromise = scanAllDocuments();
  } else if (action === 'update') {
    actionPromise = updateDocuments(requestBody.items)
  } else if (action === 'delete') {
    actionPromise = deleteDocuments(requestBody.items)
  } else {
    errorResponse('Action not found', context.awsRequestId, callback)
  };

  actionPromise.then((result) => {
    // You can use the callback function to provide a return value from your Node.js
    // Lambda functions. The first parameter is used for failed invocations. The
    // second parameter specifies the result data of the invocation.

    // Because this Lambda function is called by an API Gateway proxy integration
    // the result object must use the following structure.
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            action: action,
            result: result,
        }),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
    });
  }).catch((err) => {
    console.error(err);
    // If there is an error during processing, catch it and return
    // from the Lambda function successfully. Specify a 500 HTTP status
    // code and provide an error message in the body. This will provide a
    // more meaningful error response to the end client.
    errorResponse(err.message, context.awsRequestId, callback)
  });
};

function scanAllDocuments() {
  return ddb.scan({
    TableName: process.env.TABLE_NAME,
  }).promise();
}

function updateDocuments(items) {
  return Promise.all(items.map((item, i) => (
    ddb.put({
      TableName: process.env.TABLE_NAME,
      Item: item,
    }).promise()
  )));
}

function deleteDocuments(items) {
  return Promise.all(items.map((item, i) => (
    ddb.delete({
      TableName: process.env.TABLE_NAME,
      Key: {
        Id: item.Id,
      },
    }).promise()
  )));
}

function errorResponse(errorMessage, awsRequestId, callback) {
  callback(null, {
    statusCode: 500,
    body: JSON.stringify({
      Error: errorMessage,
      Reference: awsRequestId,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
