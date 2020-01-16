export class ScheduleService{
    getResult() {
        throw new Error("Method not implemented.");
    }
    matchSchd = [
        { matchId: 1, hostTeam: 'Tiger', guestTeam: 'Paces', ground: 'RRCC' },
        { matchId: 2, hostTeam: 'Lions', guestTeam: 'Laggan', ground: 'RRCC' }
    ]
    
    getMatchscheule():any {
        return this.matchSchd;
    }
}