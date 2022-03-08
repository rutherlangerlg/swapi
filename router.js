const express = require('express')

const resourceController = require('./src/controllers/resource-controller')

const initRouter = () => {
  const router = express.Router()
  router.get('/api/:resources', handleRequest(resourceController.getResources, 'Get resources'))
  router.get('/api/:resource/:id', handleRequest(resourceController.getResource, 'Get resource'))

  return router
}

const handleRequest = (requestHandler, requestName) => {
  return async (req, res) => {
    try {
      console.log(`Starting ${requestName} request`)
      const result = await requestHandler(req.params)
      console.log(`Successfully handled ${requestName} request`)

      res.status(200).send(result)
    } catch (err) {
      console.log(`${requestName} request failed.`, err)
      res.status(err.status).send(err.message)
    }
  }
}

module.exports = { initRouter }
