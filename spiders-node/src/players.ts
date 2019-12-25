export const play: any = async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'player Names are listed Below',
        names:'usman, ali, hassan, asif, badar',
        input: event,
      }, null, 2),
    };
  }