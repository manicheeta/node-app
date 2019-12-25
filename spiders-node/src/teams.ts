export const team: any = async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Team Names are listed Below',
        names:'launchers, Texas Kings, Lions, Warriors',
        input: event,
      }, null, 2),
    };
  }