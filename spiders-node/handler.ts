import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'go Spiders Go',
      name:'usman',
      input: event,
    }, null, 2),
  };
}
export const test: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'cha ban gai oye',
      name:'usman',
      input: event,
    }, null, 2),
  };
}
