export const message: any = async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'lets see if this function is working fine. yepppiiiiiii',
        name:'usman',
        input: event,
      }, null, 2),
    };
  }