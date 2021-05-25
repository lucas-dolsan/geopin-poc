const roundController = require('../controllers/roundController')

const routes = [
    {
        method: 'get',
        path: "/rounds",
        handler: (req, res) => {
            const round = roundController.getNextRound( req.query?.previousRoundId)
            res.json(round)
        }
    }
]

module.exports = app => routes.map(({ method, path, handler }) => app[method](path, handler))
