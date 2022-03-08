const swapiClient = require('../clients/swapi-client')

const getResource = async (params) => {
    const resource = params.resource
    const id = params.id

    console.log(`get swapi data for: ${resource}`)
  
    return swapiClient.getSwapiData(resource, id) 
}

module.exports = {
    getResource
}
