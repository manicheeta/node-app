
import { TeamsController } from "../../controller/team-controller";

export const index: any = async (event, _context) => {
  console.log(event);
  
  // const teamsName = TEAMS;
  let teamCtl = new TeamsController()

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: teamCtl.score,
        teams: teamCtl.teams,
        id: teamCtl.id,
  
        
      }, null, 2),
    };
  }

  