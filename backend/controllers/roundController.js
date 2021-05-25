const hash = require('../lib/hash')
const placeService = require('../services/placeService')


function getNextRound(previousRoundId = null) {
    const round = {
        id: hash.generateHash(),
        previousRoundId,
        place: placeService.getRandomPlace()
    }
    
    return round
}

module.exports = {
    getNextRound
}