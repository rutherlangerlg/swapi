class CustomError extends Error {
  constructor(message, status) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
    this.status = status || 500
  }
}

class ResourceNotFound extends CustomError {
  constructor(resource, id) {
    super(` resource: ${resource} with the id: ${id} not found`, 404)
  }
}
class SwapiFailure extends CustomError {
  constructor (errData) {
    super(errData.message)
    this.status = errData.status
  }
}

module.exports = {
  ResourceNotFound,
  SwapiFailure
}
