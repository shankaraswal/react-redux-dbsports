import axios from 'axios';

    export const fetchLeaguesApi = () =>
        axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php');

    export const fetchLeagueDetailApi=(lid)=>
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${lid}`)

    export const fetchSportsApi=()=>
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/all_sports.php`)

    export const fetchTeamsApi=(name)=>
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${name}`)

    export const fetchTeamDetailApi=(tid)=>
        axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${tid}`)

    