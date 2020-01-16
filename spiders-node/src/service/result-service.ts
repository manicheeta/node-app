export class ResultService {
    
    results: {
        leagueType: 'T35',
        leagueYear: 2020,
        division: "A",
        matches: [
            {
                matchNumber: 1,
                matchId: 100,
                guestTeam: "Lions",
                hostTeam: "Pacers",
                winningTeam: "Lions",
            },
            {
                matchNumber: 2,
                matchId: 100,
                guestTeam: "Laggan",
                hostTeam: "Tigers",
                winningTeam: "Tigers",
            },
            {
                matchNumber: 3,
                matchId: 100,
                guestTeam: "Gladiators",
                hostTeam: "Pacers",
                winningTeam: "Pacers",
            }
        ]
        getResult(): any{
    return this.matches.matchNumber;


}

}
