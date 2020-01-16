export const message: any = async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'this function is only to display the message. yepppiiiiiii',
        name:'usman, ali',
        input: event,
      }, null, 2),
    };
  }