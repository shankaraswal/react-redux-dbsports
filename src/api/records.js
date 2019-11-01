import axios from 'axios';

export const fetchLeaguesApi = () =>
    axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php');
