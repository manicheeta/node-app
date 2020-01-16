export const playerindex: any = async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Player names are listed below',
        name:'usman, ali, asif, badar, hassan',
        input: event,
      }, null, 2),
    };
  }
  