/**
 * Created by macbookpro on 13.09.2017.
 */
function duckDuckGoose(players, goose) {
    return players[(goose-1)% players.length].name
}