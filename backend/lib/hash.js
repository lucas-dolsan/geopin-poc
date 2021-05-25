const crypto = require('crypto')

function generateHash() {
    return crypto.randomBytes(20).toString('hex');
}

module.exports = {
    generateHash 
}