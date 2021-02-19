import React, { Component } from 'react'
import _ from 'lodash'

export default class BixiTable extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item)
    return _.get(item, column.path)
  }

  renderIcon = (column) => {
    if (!column.sortable || column.path !== this.props.sortColumn.path) {
      return null
    }
    if (this.props.sortColumn.order === 'asc') {
      return <i className='fas fa-sort-up'></i>
    }

    return <i className='fas fa-sort-down'></i>
  }

  render() {
    const { stations, onSort } = this.props

    const columns = [
      {
        path: 'Code',
        label: 'Code',
        sortable: true,
      },
      { path: 'name', label: 'Name', sortable: true },
      { path: 'latitude', label: 'Latitude' },
      { path: 'longitude', label: 'Longitude' },
    ]

    const createKey = (item, column) => {
      return item.Code + column.path
    }

    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.path}
                  onClick={() => onSort(column.path)}
                  className='clickable'
                >
                  {column.label} {this.renderIcon(column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stations.map((station, i) => (
              <tr key={i}>
                {columns.map((column) => (
                  <td key={createKey(station, column)}>
                    {this.renderCell(station, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
