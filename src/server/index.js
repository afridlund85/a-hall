import express from 'express'
import React from 'react'
import path from 'path'
import { renderToString } from 'react-dom/server'
import App from './../client/App'
import Html from './Html'

const port = 3000
const app = express()

app.get('/', (req, res) => {
  const body = renderToString(<App />)
  res.send(Html(body))
})

app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`)
})
