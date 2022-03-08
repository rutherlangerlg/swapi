const swapiClient = require('../clients/swapi-client')

const getResources = async (params) => {
    const resources = params.resources

    console.log(`get swapi data for: ${resources}`)
    return swapiClient.getSwapiData(resources)
}

const getResource = async (params) => {
    const resource = params.resource
    const id = params.id

    console.log(`get swapi data for: ${resource}, id: ${id}`)
    const endpoint = `${resource}/${id}`
    return swapiClient.getSwapiData(endpoint)
}

module.exports = {
    getResource,
    getResources
}
