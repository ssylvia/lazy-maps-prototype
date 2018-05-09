import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import serialize from "serialize-javascript"
import App from './components/App'

const app = express()

app.use(cors())
// NOTE: this assumes the server will be run from the package root
// there's probably a better way to specify the path to the assets
app.use(express.static("dist/assets"))

app.get("*", (req, res, next) => {

  const markup = renderToString(
    <App />
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR Lazy Maps Prototype</title>
        <link rel="stylesheet" href="index.css" />
        <script src="index.bundle.js" defer></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
