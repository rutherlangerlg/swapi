const got = require('got')
const error = require('../utils/errors')

const getBaseUrl = () => {
  return 'https://swapi.dev/api/'
}

const getSwapiData = async (resource, id) => {
  const swapiBaseURL = getBaseUrl()

  const options = {
    json: true
  }

  try {
    const res = await got.get(`${swapiBaseURL}/${resource}/${id}`, options)

    return res.body
  } catch (err) {
    throw new error.ResourceNotFound(resource,id)
  }
}

module.exports = {
  getSwapiData
}
