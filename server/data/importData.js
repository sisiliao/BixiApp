import csv from 'csv-parser'
import fs from 'fs'

let stations = []

const readsData = () => {
  fs.createReadStream('./data/Stations_2019.csv')
    .pipe(csv())
    .on('data', (row) => {
      stations.push(row)
    })
    .on('end', () => {
      console.log('CSV file successfully processed')
    })
}

readsData()

export default stations
