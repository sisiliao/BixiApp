import http from './httpService'
import { apiUrl } from '../config.json'

const apiEndpoint = `${apiUrl}/stations`

const getStations = () => {
  return http.get(apiEndpoint)
}

const getStationsWithSort = (sortColumn) => {
  const { path, order } = sortColumn
  return http.get(`${apiEndpoint}?path=${path}&order=${order}`)
}

export default { getStations, getStationsWithSort }
