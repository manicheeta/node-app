import { ResultService } from "../service/result-service";

export class ResultController {
    rslt = new ResultService();
    matchSchd = this.rslt.getResult()

}