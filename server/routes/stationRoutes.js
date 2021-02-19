import express from 'express'
const router = express.Router()
import stations from '../data/importData.js'
import { allowCrossDomain } from '../middleware/corsMiddleware.js'
import _ from 'lodash'

const getStations = (req, res) => {
  const path = req.query.path
  const order = req.query.order
  let sortedStations = stations
  if (path && order) {
    sortedStations = _.orderBy(stations, path, order)
  }
  res.json(sortedStations)
}

router.get('/', allowCrossDomain, getStations)

export default router
