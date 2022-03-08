const got = require('got')
const error = require('../utils/errors')

const getBaseUrl = () => {
  return 'https://swapi.dev/api/'
}

const getSwapiData = async (endpoint) => {
  const swapiBaseURL = getBaseUrl()

  const options = {
    json: true
  }

  try {
    const res = await got.get(`${swapiBaseURL}/${endpoint}`, options)
    return res.body
  } catch (err) {
    if (err.statusCode === 404) {
      throw new error.ResourceNotFound(resource, id)
    } else {
      throw new error.SwapiFailure(err)
    }
  }
}

module.exports = {
  getSwapiData
}
