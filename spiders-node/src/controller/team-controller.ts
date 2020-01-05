import { TeamsService } from "../service/team-service";

export class TeamsController {
   ser =  new TeamsService();
    teams = this.ser.teams;

    score = this.ser.score;
    id = this.ser.id;
    // id = 786;

}
