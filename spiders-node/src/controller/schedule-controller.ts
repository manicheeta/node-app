import { ScheduleService } from "../service/SchServices/schedule-service";

export class ScheduleController {
    sch = new ScheduleService();
    matchSchd = this.sch.getMatchscheule()

}
 // score = this.ser.score;
    // id = this.ser.id;
    // id = 786;