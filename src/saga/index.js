import { takeLatest, all } from "redux-saga/effects";

import {
  REQ_LEAGUES,
  LEAGUE_DETAIL,
  SPORTS,
  TEAMS,
  TEAM_DETAIL
} from "./../constant/actiontype";

import { handleLeagues } from "./leagues";
import { handleLeagueDetail } from "./league-detail";

import { handleSports } from "./sports";
import { handleTeams } from "./teams";
import { handleTeamDetail } from "./team-detail";

function* watchAll() {
  yield all([
    takeLatest(REQ_LEAGUES, handleLeagues),
    takeLatest(LEAGUE_DETAIL, handleLeagueDetail),
    takeLatest(SPORTS, handleSports),
    takeLatest(TEAMS, handleTeams),
    takeLatest(TEAM_DETAIL, handleTeamDetail)
  ]);
}

export default watchAll;
