import { ResultService } from "../service/result-service";

export class ResultController {
    resultCtl = new ResultService();
    rCtl = this.resultCtl.result

}