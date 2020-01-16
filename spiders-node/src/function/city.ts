import { resolve } from "dns";


const sls = require('serverless-http');
const express = require('express');

const app = express();

app.get('/', (req, res) =>)

res.send('test');

});



export const mycity: any = async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'austin is capital city',
        name:'usman, ali',
        input: event,
      }, null, 2),
    };
  }