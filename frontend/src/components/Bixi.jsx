import React, { Component } from 'react'
import stationService from '../services/stationService'
import BixiTable from './BixiTable'

export default class Bixi extends Component {
  constructor() {
    super()
    this.state = {
      stations: [],
      sortColumn: { path: 'Code', order: 'asc' },
    }
  }

  componentDidMount = async () => {
    const { data: stations } = await stationService.getStations()
    this.setState({
      stations,
    })
  }

  handleSort = async (path) => {
    if (path === 'latitude' || path === 'longitude') {
      return
    }
    let sortColumn = { ...this.state.sortColumn }
    if (path === sortColumn.path) {
      //toggle
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    } else {
      sortColumn = { path, order: 'asc' }
    }

    const { data: stations } = await stationService.getStationsWithSort(
      sortColumn
    )
    this.setState({
      stations,
      sortColumn,
    })
  }

  render() {
    const { stations, sortColumn } = this.state
    return (
      <div>
        <BixiTable
          stations={stations}
          onSort={this.handleSort}
          sortColumn={sortColumn}
        ></BixiTable>
      </div>
    )
  }
}
