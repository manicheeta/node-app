export const test: any = async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'cha ban gai oye',
        name:'usman',
        input: event,
      }, null, 2),
    };
  }
  