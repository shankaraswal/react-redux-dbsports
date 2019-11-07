
//Leagues component
const getAllLeagues = (state) =>
    state.leaguesState[0]

//filter: sports type from leagues list
const getSportsType = (state) =>{
    const data = state.leaguesState[0] || [];
    const unique= [];
        data.map(x=> {
            return unique.filter(a => a.strSport == x.strSport).length > 0 ? null : unique.push(x);
        });
        return unique;
}

//LeagueDetail component
const getLeagueDetail = (state) =>
    state.leagueDetailState[0]

//Sports Component
const getSportsList = (state) =>
    state.sportsState;

//Teams component
const getTeams=(state)=>
    state.teamsState
    



export { getAllLeagues, getSportsType,  getLeagueDetail, getSportsList, getTeams }


