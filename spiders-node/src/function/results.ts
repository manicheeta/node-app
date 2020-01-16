import { ResultController } from "../controller/results-controller"

export const index: any = async (event, _context) => {
    console.log(event);

    
    let results = new ResultController()

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: results.matchSchd,



        }, null, 2),
    };
}