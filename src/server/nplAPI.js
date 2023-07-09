
const dotenv = require('dotenv')
dotenv.config()

const myAPI = process.env.API_KEY

let json = {
    'key': myAPI
}


module.exports = json