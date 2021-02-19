import express from 'express'
import colors from 'colors'
import stationRoutes from './routes/stationRoutes.js'

const app = express()

app.use('/api/stations', stationRoutes)

app.use('/', (req, res) => {
  res.send('Api is running ...')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
