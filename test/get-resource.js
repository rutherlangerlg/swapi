// @ts-check

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
})

const test = require('tape')
const got = require('got')

const sendRequest = async (url, httpFunc) => {
  const res = await httpFunc(url, {
    json: true,
    headers: {
      'content-type': 'application/json'
    },
  })
  return res
}

//service tests

test('getPeople', async (t) => {
  t.plan(1)

  const url = 'http://localhost:3000/swapi/api/people'

  const resp = await sendRequest(url, got.get)
  t.equals(resp.body.count, 82)
})