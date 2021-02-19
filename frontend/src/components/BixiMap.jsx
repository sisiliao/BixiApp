import * as React from 'react'
import { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import stationService from '../services/stationService'

function BixiMap(props) {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: 45.4782278730915,
    longitude: -73.5696512460709,
    zoom: 10,
  })

  const [stations, setStations] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const { data: stations } = await stationService.getStations()
      setStations(stations)
    }
    if (stations.length === 0) {
      loadData()
    }
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={props.mapboxApiAccessToken}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {stations.map((station) => (
        <Marker
          key={station.Code}
          latitude={Number(station.latitude)}
          longitude={Number(station.longitude)}
        >
          <div style={{ color: 'red' }}>.</div>
        </Marker>
      ))}
    </ReactMapGL>
  )
}

export default BixiMap
