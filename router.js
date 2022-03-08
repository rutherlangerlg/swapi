const express = require('express')

const resourceController = require('./src/controllers/resource-controller')

const initRouter = () => {
  const router = express.Router()
  router.get('/api/:resource/:id', handleRequest('GetResource'))

  return router
}

const handleRequest = (requestName) => {
  return async (req, res) => {
    try {
      console.log(`Starting ${requestName} request`)
      const result = await resourceController.getResource(req.params)
      console.log(`Successfully handled ${requestName} request`)

      res.status(200).send(200, result)
    } catch (err) {
      console.log(`${requestName} request failed.`, err)
      res.status(err.status).send(err.status, err.message)
    }
  }
}

module.exports = { initRouter }
