const express = require('express')
const app = express()
const router = require('./router').initRouter()

const SERVICE_PORT = 3000
const SERVICE_NAME = 'swapi'

try {
  app.use(`/${SERVICE_NAME}`, router)

  app.get('/status', (req, res) => {
    res.status(200).send({
      data: `${SERVICE_NAME} server health is okay`
    })
  })

  app.listen(SERVICE_PORT, () =>
    console.log(`${SERVICE_NAME} service is up and running on port ${SERVICE_PORT}`)
  )
} catch (err) {
  console.log(`Failed to start ${SERVICE_NAME} service:`, err)
  return err
}