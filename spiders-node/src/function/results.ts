import { ResultController } from "../controller/results-controller"

export const index: any = async (event, _context) => {
    console.log(event);

    const finalResult = new ResultController()
    

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: finalResult.rCtl.matches[2]



        }, null, 2),
    };
}