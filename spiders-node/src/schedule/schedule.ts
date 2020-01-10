import { ScheduleController } from "../SchdController/schedule-controller";

export const index: any = async (event, _context) => {
    console.log(event);

    // const teamsName = TEAMS;
    let matchInfo = new ScheduleController ()

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: matchInfo.matchSchd,
             //teams: teamCtl.teams,
            // id: teamCtl.id,


        }, null, 2),
    };
}
