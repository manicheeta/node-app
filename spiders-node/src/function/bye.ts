export const goodbye: any = async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'there is never a right time to say goodbye',
        name:'usman',
        input: event,
      }, null, 2),
    };
  }
  